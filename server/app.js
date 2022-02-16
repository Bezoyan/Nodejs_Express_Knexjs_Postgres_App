const express = require('express');
const bodyParser = require('body-parser')

const config = require('./configs/index');
const router = require('./routes');

//initialize knex
//const knex = require('knex')(knexConfig[process.env.NODE_ENV])


const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(router);

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.listen(config.port, () => {
    console.log(`Running on PORT ${config.port}`)
});