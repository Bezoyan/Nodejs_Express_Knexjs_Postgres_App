const express = require('express');
const app = express();

const articleRouter = require('./routes/articles');
const port   = require('./configs/config');

app.use('/', articleRouter);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Running on PORT ${port}`)
});