let express = require('express');
let apiRoutes = require('./routes/apiRoutes');
let appRoutes = require('./routes/appRoutes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', apiRoutes);
app.use('/', appRoutes);

const dbPath = 'mongodb://re:rerere@207.154.248.55/servermonitor';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('Connected to Database');
}, error => {
    console.log(error, 'error');
});

app.listen(8080, function() {
    console.log("Running App");
});