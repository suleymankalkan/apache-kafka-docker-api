const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/kartaca', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected.");
}).catch((err) => {
  console.log("MongoDB connection error!");
});