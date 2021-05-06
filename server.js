const express = require('express');
const connectDB = require('./DB/Connection');
const bodyParser = require('body-parser');
const app = express();

//DB connection
connectDB();
app.use(express.json({ extended: false }));

//Static Link redirect to API folder
app.use('/api', require('./Api/User'));

//Body parser middleware
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
