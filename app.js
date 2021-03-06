var express = require('express');
var bodyParser = require('body-parser');

// create routes
const product = require('./routes/product.route');
const app = express();
let port = 1234;

// database connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://producttestuser:lapham21@ds231720.mlab.com:31720/productstutorial';
let mongoDB = process.env.MONDB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// use products
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

// setup webserver
app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});

