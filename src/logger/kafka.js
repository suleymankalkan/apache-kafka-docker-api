const Tail = require('tail').Tail;
const kafka = require('kafkajs');

const tail = new Tail(LOG_FILE_PATH);
const producer = kafka.producer();
const consumer = kafka.consumer();


const produceLogs = async () => {
    await producer.connect();
    tail.on('line', (line) => {
        producer.send({
            topic: 'logs',
            messages: [
                { value: line },
            ],
        })
    })
};

const consumeLogs = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic: 'logs'})
   
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        await MONGO_INSERT_BLA_BLA()
      }
    })
};