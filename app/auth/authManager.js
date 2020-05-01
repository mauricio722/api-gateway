const authManager = module.exports;
const authMSresource = require('../resources/authMSresource');
const Token = require('../utils/token');


authManager.create = async (options = {}) => {
  const { logger } = options;
  const auth = await authMSresource.create();
  console.log(auth);
  logger.info(`auth with ${JSON.stringify(auth)}`);

  return auth;
};

authManager.login = async (body, logger) => {
  console.log('entre');
  console.log(body);
  const user = await authMSresource.login(body, logger);
  if (user) {
    return { id: user.id, email: user.email, token: Token.create({ id: user.id, email: user.email }) };
  }

  return null;
};


authManager.updateUser = async (id, body, options = {}) => {
  const { logger } = options;

  logger.info(` with ProductsManager.updateproduct params: ${JSON.stringify(id)}`);

  const productandimages = await authMSresource.update(id, body);

  return productandimages;
};

authManager.getUser = async (id, options = {}) => {
  const { logger } = options;

  logger.info(`authManager.getUser params: ${JSON.stringify(id)}`);

  const user = await authMSresource.getUser(id);

  return user;
};
