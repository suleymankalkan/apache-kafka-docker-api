const {Kafka} = require('kafkajs');
const mongoose = require('mongoose');
const LogSchema = require('../models/logSchema');



const consumeLogs = async () => {
    const kafka = new Kafka({
      clientId: 'kartaca-log',
      brokers: ["kafka:9093"],
      retry: {
        retries: 100000
      }
    });

    const admin = kafka.admin();
    const consumer = kafka.consumer({ groupId: 'test-consumer-group' });
    await admin.connect();
    await consumer.connect()
    await consumer.subscribe({ topic: 'apilogs' ,fromBeginning: false })

    await mongoose.connect('mongodb://mongo:27017/kartaca', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log("MongoDB connected in consumer.");
    }).catch((err) => {
      console.log("MongoDB connection error in consumer!");
    });
   
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        let msgObj = JSON.parse(message.value.toString());
        let methodType = msgObj.message.split(",")[0];
        let responseTime = parseInt(msgObj.message.split(",")[1]);
        let timeStamp = parseInt(msgObj.message.split(",")[2]);
        
        const log = new LogSchema({
          'methodType' : methodType,
          'responseTime' : responseTime,
          'timeStamp' : new Date(1000*timeStamp)
        });

        log.save((err, data) => {
          if (err)
            console.log(err);
          console.log("Log data saved to mongodb: ", data);
        });
      }
    })
};

consumeLogs();