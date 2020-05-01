const express = require('express');
const bodyparser = require('body-parser');
const log4js = require('log4js');
const { PREFIX } = require('./app/config/Appconfig');
const routes = require('./app/routes');
const ErrorHandlerMiddleware = require('./app/utils/ErrorHandlerMiddleware');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyparser.json());

const logger = log4js.getLogger('MarketplaceGateway-ms');

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  logger.error(reason.stack);
});

app.use(PREFIX, routes);
app.use(ErrorHandlerMiddleware.MainHandler);

app.listen(PORT, () => {
  console.log('Listening on Port:', PORT);
});


module.exports = app;
