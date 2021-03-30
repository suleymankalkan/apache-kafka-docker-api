const Tail = require('tail').Tail;
const {Kafka} = require('kafkajs');

const tail = new Tail("api.log", {fromBeginning: false, useWatchFile: true});

const kafka = new Kafka({
    clientId: 'kartaca-log',
    brokers: ['kafka:9092'],
    retry: {
        retries: 10
    }
  });

    const admin = kafka.admin();
    const producer = kafka.producer();

/*const producer = kafka.producer();
const consumer = kafka.consumer();
*/
/*tail.on('line', (line) => {
    console.log("yeni log:", line);
})*/


const produceLogs = async () => {
    await admin.connect();
    await producer.connect();
    let topics = await admin.listTopics();
    if (topics.includes('api-log') == false) {
        await admin.createTopics({
            topics: [{
                topic: 'api-log'
            }]
        });
    }
    tail.on('line', (line) => {
        producer.send({
            topic: 'api-log',
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
};

produceLogs();