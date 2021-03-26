const Tail = require('tail').Tail;
const {Kafka} = require('kafkajs');

const tail = new Tail("api.log", {fromBeginning: false, useWatchFile: true});
/*const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka1:9092', 'kafka2:9092']
  })
const producer = kafka.producer();
const consumer = kafka.consumer();*/

tail.on('line', (line) => {
    console.log("yeni log:", line);
})

/*
const produceLogs = async () => {
    await producer.connect();
    tail.on('line', (line) => {
        producer.send({
            topic: 'logs',
            messages: [
                { value: line },
            ],
        })
        console.log("yeni log:", line);
    })
};

const consumeLogs = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic: 'logs'})
   
    await consumer.run({
      eachMessage: async (message) => {
        await MONGO_INSERT_BLA_BLA()
      }
    })
};*/