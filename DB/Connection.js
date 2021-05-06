const mongoose = require('mongoose');
const URI = "mongodb+srv://sonalijoburg:sonalijoburg@merndemo.5bl4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async() => {
   await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
   console.log('DB connected');
}

module.exports = connectDB;