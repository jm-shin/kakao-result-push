const express = require('express');
const morgan = require('morgan');
const campaignRouter = require('./router/campaign');
const { connectMongoDB } = require('./db/database');
const { config } = require('./config');

const app = express();

app.use(morgan('tiny'));
app.use('/api/campaign', campaignRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

//mongo
connectMongoDB()
    .then((client) => {
        console.log(client);
        const server = app.listen(config.host.port);
    })
    .catch(console.error);
