import express from 'express';
import morgan from 'morgan';
import campaignRouter from './router/campaign.js';
import { connectMongoDB } from './db/database.js';
import { config } from './config.js';
import logger from './util/logger.js';

const app = express();

logger.info('================ server init ================');
app.use(express.json());
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
        const server = app.listen(config.host.port);
    })
    .catch(console.error);

//app.listen(4747);