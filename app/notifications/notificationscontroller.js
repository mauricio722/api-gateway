const NotificationController = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const NotificationManager = require('./notificationsManager');


NotificationController.sendNotification = (req, res, next) => {
  const logName = 'get products';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`stars notificationsController.send  with body ${body}`);

  return NotificationManager.sendNotification(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

NotificationController.registerDevice = (req, res, next) => {
  const logName = 'get products';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`stars notificationsController.registerdevice  with body ${body}`);

  return NotificationManager.registerDevice(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

NotificationController.updateTokendevice = (req, res, next) => {
  const logName = 'get products';
  const logger = req.log || console;
  const { body } = req;
  const { params: { idUser } } = req;

  logger.info(`stars notificationsController.registerdevice  with body ${body}`);

  return NotificationManager.updateTokendevice(body, idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

NotificationController.getToken = (req, res, next) => {
  const logName = 'get products';
  const logger = req.log || console;
  const { params: { idUser } } = req;

  logger.info(`stars notificationsController.getToken  with body ${idUser}`);

  return NotificationManager.getToken(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

NotificationController.getDevices = (req, res, next) => {
  const logName = 'get Devices';
  const logger = req.log || console;

  logger.info('stars notificationsController.getdevices');

  return NotificationManager.getDevices({ logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};
