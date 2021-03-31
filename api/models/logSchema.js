const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
    methodType : String,
    responseTime : Number,
    timeStamp : Date
});

module.exports = mongoose.model('log', LogSchema);