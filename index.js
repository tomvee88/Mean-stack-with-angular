const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

// connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(config.keys.URI, (err) => {
    if(err) {
        console.log('Connection to database failed');
    } else {
        console.log('Connected to database' + config.keys.db);
    }
});

// provide access to dist directory
app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});