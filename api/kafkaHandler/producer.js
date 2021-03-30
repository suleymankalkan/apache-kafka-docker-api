const Tail = require('tail').Tail;
const {Kafka} = require('kafkajs');

const tail = new Tail("api.log", {fromBeginning: false, useWatchFile: true});

const kafka = new Kafka({
    clientId: 'kartaca-log',
    brokers: ["kafka:9093"],
    retry: {
        retries: 100000
    }
});

const admin = kafka.admin();
const producer = kafka.producer();


const produceLogs = async () => {
    await admin.connect();
    console.log("kafka admin connected.")
    await producer.connect();
    console.log("kafka producer connected.")

    tail.on('line', (line) => {
        producer.send({
            topic: 'apilogs',
            messages: [
                { value: line },
            ],
        })
        console.log("Api.log new entry:", line);
    })
};


produceLogs();
