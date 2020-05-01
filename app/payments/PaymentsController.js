const PaymentsController = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const PaymentsManager = require('./PaymentsManager');

PaymentsController.create = (req, res, next) => {
  const logName = 'create: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts PaymentsController.create: body ${JSON.stringify(body)}`);

  return PaymentsManager.create(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

PaymentsController.success = (req, res, next) => {
  const logName = 'success: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts PaymentsController.success: body ${JSON.stringify(body)}`);

  return PaymentsManager.success(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

PaymentsController.payout = (req, res, next) => {
  const logName = 'payout: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts PaymentsController.payout: body ${JSON.stringify(body)}`);

  return PaymentsManager.payout(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};
