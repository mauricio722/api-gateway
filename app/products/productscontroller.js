const productscontroller = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const productsManager = require('./productsManager');
const ProductsMSresource = require('../resources/productsMSresource');

productscontroller.getproducts = (req, res, next) => {
  const logName = 'get products';
  const logger = req.log || console;

  logger.info('stars productscontroller.getproducts');

  return productsManager.getproducts({ logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.getproductsbyid = (req, res, next) => {
  const logName = 'Getproductsbyid ';
  const logger = req.log || console;
  const { params: { id } } = req;
  logger.info(`stars productscontrollers.getproductsbyid: params  ${id}`);

  return productsManager.getproductsbyid(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.getproductsbycategory = (req, res, next) => {
  const logName = 'getproductsbycategory';
  console.log('llegue aqui');
  const logger = req.log || console;
  const { params: { id } } = req;
  logger.info(`stars productscontroller.getproductsbycategory: params ${id}`);

  return productsManager.getproductsbycategory(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};


productscontroller.postRegisterProducts = (req, res, next) => {
  const logName = 'RegisterProducts';
  const logger = req.log || console;
  const { body } = req;

  logger.info('stars productscontroller..postRegisterProducts');

  return productsManager.postRegisterProducts(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.getproductsbyname = (req, res, next) => {
  const logName = 'getproductsbyname';
  const logger = req.log || console;
  const { params: { name } } = req;

  logger.info(`stars productscontroller.getproductsbyname: params ${name}`);

  return productsManager.getproductsbyname(name, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.getproductswithimages = (req, res, next) => {
  const logName = 'getproductswith image';
  const logger = req.log || console;
  const { params: { idproduct } } = req;

  logger.info(`stars getproductswithimages.${logName}: params ${idproduct}`);

  return productsManager.getproductswithimages(idproduct, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.registerimages = (req, res, next) => {
  const logName = 'registerproducts';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`stars productscontroller.registerimages with body ${body}`);

  return productsManager.registerimages(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.deleteproduct = (req, res, next) => {
  const logName = 'registerproducts';
  const logger = req.log || console;
  const { params } = req;

  logger.info(`stars productscontroller.deleteproduct with params ${params.id}`);

  return productsManager.deleteproduct(params.id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.updateproduct = (req, res) => {
  const logName = 'rupdateproducts';
  const logger = req.log || console;
  const { params, body } = req;

  logger.info(`stars productscontroller.updateproduct with params ${params.id}`);

  return productsManager.updateproduct(params.id, body, { logger, logName })
    .then((response) => res.send(response));
};


productscontroller.getUser = (req, res, next) => {
  const logName = 'getUser';
  const logger = req.log || console;
  const { idUser } = req.params;

  logger.info(`stars productscontroller.getuser  with params: ${idUser}`);

  return productsManager.getUser(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.getUsers = (req, res, next) => {
  const logName = 'getUsers';
  const logger = req.log || console;
  const { idUser } = req.params;

  logger.info(`stars productscontroller.getusers  with params: ${idUser}`);

  return productsManager.getUsers(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.favoriteProductsForIdUser = (req, res, next) => {
  const logName = 'favoriteProductsForIdUser';
  const logger = req.log || console;
  const { idUser } = req.params;

  logger.info(`stars productscontroller.favoriteProductsForIdUser  with params: ${idUser}`);

  return ProductsMSresource.getFavoriteProductsForIdUser(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

// create favorites products

productscontroller.createFavoriteProducts = (req, res, next) => {
  const logName = 'createFavoriteProducts';
  const logger = req.log || console;
  const { body } = req;

  logger.info('stars productscontroller.createFavoriteProducts');

  return ProductsMSresource.createFavoriteProducts(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

// CLOSE OFFER
productscontroller.closeoffer = (req, res, next) => {
  const logName = 'closeOffer';
  const logger = req.log || console;
  const { params: { id } } = req;
  const { body } = req;

  logger.info(`stars porductscontroller.closeoffer with params: ${id}`);

  return productsManager.closeoffer(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

// my shopping
productscontroller.myshopping = (req, res, next) => {
  const logName = 'myshopping';
  const logger = req.log || console;
  const { idUser } = req.params;

  logger.info(`stars productscontroller.myshopping  with params: ${idUser}`);

  return productsManager.myshopping(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.createShoppingProducts = (req, res, next) => {
  const logName = 'createShoppingProducts';
  const logger = req.log || console;
  const { body } = req;
  logger.info('stars productscontroller..createShoppingProducts');

  return ProductsMSresource.createShoppingProducts(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.getFavoriteProductsByProducts = (req, res, next) => {
  const logName = 'getFavoriteProductsByProducts ';
  const logger = req.log || console;
  const { params: { idProject } } = req;
  logger.info(`stars productscontrollers.getFavoriteProductsByProducts: params  ${idProject}`);

  return ProductsMSresource.getFavoriteProductsByProducts(idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.deleteFavoriteProducts = (req, res, next) => {
  const logName = 'deleteFavoriteProducts';
  const logger = req.log || console;
  const { params } = req;
  logger.info(`stars productscontroller.deleteFavoriteProducts with params ${params.id}`);

  return ProductsMSresource.deleteFavoriteProducts(params.id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.updateimage = (req, res, next) => {
  const logName = 'update image';
  const logger = req.log || console;

  const { body } = req;
  const { params: { id } } = req;

  console.log(id);
  logger.info(`stars productscontroller.updateimage with params ${id}`);

  return productsManager.updateimage(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

// create navigation
productscontroller.createNavigation = (req, res, next) => {
  const logName = 'createNavigator';
  const logger = req.log || console;
  const { body } = req;

  logger.info('stars productscontroller.createNavigator');

  return ProductsMSresource.createNavigation(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

// get navigation by iduser
productscontroller.NavigatorProductsForIdUser = (req, res, next) => {
  const logName = 'NavigatorProductsForIdUser';
  const logger = req.log || console;
  const { idUser } = req.params;

  logger.info(`stars productscontroller.NavigatorProductsForIdUser  with params: ${idUser}`);

  return ProductsMSresource.getNavigatorProductsForIdUser(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

// get navigation by idproduct
productscontroller.getNavigationByProducts = (req, res, next) => {
  const logName = 'getNavigationByProducts ';
  const logger = req.log || console;
  const { params: { idProject } } = req;
  logger.info(`stars productscontrollers.getNavigationByProducts: params  ${idProject}`);

  return ProductsMSresource.getNavigationByProducts(idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

// delete navigation
productscontroller.deleteNavigation = (req, res, next) => {
  const logName = 'deleteNavigation';
  const logger = req.log || console;
  const { params } = req;
  logger.info(`stars productscontroller.Navigation with params ${params.id}`);

  return ProductsMSresource.deleteNavigation(params.id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

// get shopping by idproduct
productscontroller.getShoppingByProducts = (req, res, next) => {
  const logName = 'getShoppingByProducts ';
  const logger = req.log || console;
  const { params: { idProject } } = req;
  logger.info(`stars productscontrollers.getShoppingByProducts: params  ${idProject}`);

  return ProductsMSresource.getShoppingByProducts(idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

// delete shopping
productscontroller.deleteShopping = (req, res, next) => {
  const logName = 'deleteShopping';
  const logger = req.log || console;
  const { params } = req;
  logger.info(`stars productscontroller.deleteShopping with params ${params.id}`);

  return ProductsMSresource.deleteShopping(params.id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};
productscontroller.getSoldProducts = (req, res, next) => {
  const logName = 'getSoldProducts';
  const logger = req.log || console;
  const { params: { idusuario } } = req;
  logger.info(`stars productscontrollers.getSoldProducts: params  ${idusuario}`);

  return ProductsMSresource.getSoldProducts(idusuario, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.getsuggestions = (req, res, next) => {
  const logName = 'getSoldProducts';
  const logger = req.log || console;
  const { params: { iduser } } = req;
  logger.info(`stars productscontrollers.getSoldProducts: params  ${iduser}`);

  return ProductsMSresource.getsuggestions(iduser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};
productscontroller.getmaxsuggestion = (req, res, next) => {
  const logName = 'getSoldProducts';
  const logger = req.log || console;
  const { params: { idCategory } } = req;
  const { params: { cost } } = req;
  logger.info(`stars productscontrollers.getSoldProducts: params  ${idCategory} ${cost}`);

  return ProductsMSresource.getmaxsuggestion(idCategory, cost, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};
productscontroller.getmaxnavigation = (req, res, next) => {
  const logName = 'getmaxnavigation';
  const logger = req.log || console;
  const { params: { idUser } } = req;
  logger.info(`stars productscontrollers.getmaxnavigation: params  ${idUser}`);

  return ProductsMSresource.getmaxNavigation(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};
productscontroller.getPaymentsReceived = (req, res, next) => {
  const logger = req.log || console;
  const { params: { idDealer } } = req;
  logger.info(`stars productscontrollers.getPaymentsReceived: params  ${idDealer}`);


  return ProductsMSresource.getPaymentsReceived(idDealer)
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};

productscontroller.getFavoriteProductsByIdUserAndIdProducts = (req, res, next) => {
  const logger = req.log || console;
  const { idProduct } = req.params;
  const { idusuario } = req.params;
  logger.info(`stars productscontrollers.getFavoriteProductsByIdUserAndIdProducts: 
  params  ${idProduct}, ${idusuario}`);


  return ProductsMSresource.getFavoriteProductsByIdUserAndIdProducts(idProduct, idusuario)
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};
