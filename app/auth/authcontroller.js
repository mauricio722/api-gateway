const authcontroller = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const authManager = require('./authManager');
const authMSresource = require('../resources/authMSresource');


authcontroller.create = (req, res, next) => {
  const logName = 'CreateAuth: ';
  const logger = req.log || console;
  const { body } = req;
  logger.info(`Starts AuthController.create: params ${JSON.stringify(body)}`);

  return authMSresource.create(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

authcontroller.login = (req, res, next) => {
  const logName = 'LoginAuth: ';
  const logger = req.log || console;
  const { body } = req;
  logger.info(`Starts AuthController.login: params ${JSON.stringify(body)}`);

  return authManager.login(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};


authcontroller.updateUser = (req, res, next) => {
  const logName = 'updateUser';
  const logger = req.log || console;
  const { body } = req;
  const { params: { idUser } } = req;

  logger.info(`stars authcontroller.updateuser with params ${idUser}`);

  return authManager.updateUser(idUser, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

authcontroller.changePassword = (req, res, next) => {
  const logName = 'changepassword: ';
  const logger = req.log || console;
  const { body } = req;
  const { params: { email } } = req;
  logger.info(`Starts AuthController.create: params ${JSON.stringify(body, email)}`);


  return authMSresource.changePassword(email, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

authcontroller.getUser = (req, res, next) => {
  const logName = 'getUser';
  const logger = req.log || console;
  const { params: { idUser } } = req;

  logger.info(`stars autcontroller.getuser with params ${idUser}`);

  return authManager.getUser(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

authcontroller.recoverPass = (req, res, next) => {
  const logName = 'recoverPass: ';
  const logger = req.log || console;
  const { params: { email } } = req;
  logger.info(`Starts authcontroller.recoverPass: params ${JSON.stringify(email)}`);

  return authMSresource.recoverPass(email, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

authcontroller.getUserByEmail = (req, res, next) => {
  const logName = 'getUserByEmail';
  const logger = req.log || console;
  const { email } = req.params;

  logger.info(`stars autcontroller.getUserByEmail with params ${email}`);

  return authMSresource.getUserByEmail(email, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};
