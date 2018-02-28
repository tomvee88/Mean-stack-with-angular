const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// local
const authenication = require('./routes/authenication');

// connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(config.keys.URI, (err) => {
    if(err) {
        console.log('Connection to database failed');
    } else {
        console.log('Connected to database' + config.keys.db);
    }
});

// ************************************************************ 
// cross origin
app.use(cors({
    origin: 'http://localhost:4200'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// provide static directory for frontend
app.use(express.static(__dirname + '/client/dist/'));

// connect server to Angular Index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/dist/index.html'));
// });

app.use('/auth', authenication);
// ************************************************************ 

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});