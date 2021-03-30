const {Kafka} = require('kafkajs');

const kafka = new Kafka({
    clientId: 'kartaca-log',
    brokers: ["kafka:9093"],
    retry: {
        retries: 100000
    }
});

const admin = kafka.admin();
const consumer = kafka.consumer({ groupId: 'test-consumer-group' });

const consumeLogs = async () => {
    await admin.connect();
    await consumer.connect()
    await consumer.subscribe({ topic: 'apilogs'})
   
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log("kafka consumed message: ",message.value.toString())
      }
    })
};

consumeLogs();