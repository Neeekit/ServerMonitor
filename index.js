let express = require('express')
let routes = require('./routes')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
let port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const dbPath = 'mongodb://localhost/servermonitor';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('Connected to Database');
}, error => {
    console.log(error, 'error');
})

app.use('/api', routes)

app.listen(port, function() {
    console.log("Running App on Port "+ port);
})
