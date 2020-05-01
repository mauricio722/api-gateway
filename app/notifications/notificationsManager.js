const NotificationsManager = module.exports;
const NotificationsMSresource = require('../resources/notificationsMSresource');

NotificationsManager.sendNotification = async (body, options = {}) => {
  const { logger } = options;

  const products = await NotificationsMSresource.sendNotification(body);
  logger.info(`products details with body: ${body}`);

  return products;
};

NotificationsManager.registerDevice = async (body, options = {}) => {
  const { logger } = options;

  const products = await NotificationsMSresource.registerDevice(body);
  logger.info(`products details with body: ${body}`);

  return products;
};

NotificationsManager.updateTokendevice = async (body, id, options = {}) => {
  const { logger } = options;

  const products = await NotificationsMSresource.updateTokendevice(body, id);
  logger.info(`products details with params: ${id}`);

  return products;
};

NotificationsManager.getToken = async (id, options = {}) => {
  const { logger } = options;

  const products = await NotificationsMSresource.getToken(id);
  logger.info(`products details with params: ${id}`);

  return products;
};

NotificationsManager.getDevices = async (options = {}) => {
  const { logger } = options;
  logger.info('notificationsManager getDevices');

  const products = await NotificationsMSresource.getDevices();


  return products;
};
