const express = require('express');
const bodyParser = require('body-parser')

const config = require('./configs/index');
const router = require('./routes');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(router);


app.listen(config.port, () => {
    console.log(`Running on PORT ${config.port}`)
});