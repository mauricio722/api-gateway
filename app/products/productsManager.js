const ProductsManager = module.exports;
// const Promise = require('bluebird');
const ProductsMSresource = require('../resources/productsMSresource');

ProductsManager.getproducts = async (options = {}) => {
  const { logger } = options;

  const products = await ProductsMSresource.getproducts();
  logger.info('products details');

  return products;
};

ProductsManager.getproductsbyid = async (id, options = {}) => {
  const { logger } = options;

  const product = await ProductsMSresource.getproductsbyid(id);
  logger.info(`products details with ${JSON.stringify(id)}`);

  return product;
};

ProductsManager.getproductsbycategory = async (id, options = {}) => {
  const { logger } = options;

  const product = await ProductsMSresource.getproductsbycategory(id);
  logger.info(`prodcutsbycategory details with ${JSON.stringify(id)}`);

  return product;
};


ProductsManager.postRegisterProducts = async (body, options = {}) => {
  const { logger } = options;

  const product = await ProductsMSresource.postRegisterProducts(body);
  logger.info(`ProductsManager.postRegisterProducts with ${JSON.stringify(body)}`);

  return product;
};

ProductsManager.getproductsbyname = async (name, options = {}) => {
  const { logger } = options;

  const products = await ProductsMSresource.getproductsbyname(name);
  logger.info(`ProductsManager.getproductsbyname with ${JSON.stringify(name)}`);

  return products;
};

ProductsManager.getproductswithimages = async (id, options = {}) => {
  const { logger } = options;

  logger.info(`ProductsManager.getproductswithimages with params: ${JSON.stringify(id)}`);

  const productandimages = await ProductsMSresource.getproductswithimages(id);

  return productandimages;
};

ProductsManager.registerimages = async (body, options = {}) => {
  const { logger } = options;

  logger.info(`ProductsManager.register with body: ${JSON.stringify(body)}`);

  const images = await ProductsMSresource.registerimages(body);

  return images;
};

ProductsManager.deleteproduct = async (id, options = {}) => {
  const { logger } = options;

  logger.info(`ProductsManager.getproductswithimages with params: ${JSON.stringify(id)}`);

  const productandimages = await ProductsMSresource.deleteproduct(id);

  return productandimages;
};

ProductsManager.updateproduct = async (id, body, options = {}) => {
  const { logger } = options;

  logger.info(` with ProductsManager.updateproduct params: ${JSON.stringify(id)}`);

  const productandimages = await ProductsMSresource.updateproduct(id, body);

  return productandimages;
};


// find product active by idUser
ProductsManager.getUser = async (id, options = {}) => {
  const { logger } = options;

  const product = await ProductsMSresource.getUser(id);
  logger.info(`productsByIdUser details with ${JSON.stringify(id)}`);

  return product;
};

// find product active by idUser
ProductsManager.getUsers = async (id, options = {}) => {
  const { logger } = options;

  const product = await ProductsMSresource.getUsers(id);
  logger.info(`productsByIdUser details with ${JSON.stringify(id)}`);

  return product;
};

// CLOSE OFFER
ProductsManager.closeoffer = async (id, body, options = {}) => {
  const { logger } = options;

  const state = await ProductsMSresource.closeoffer(id, body);
  logger.info(`ProductsManager closeoffer with id  ${JSON.stringify(id)}`);

  return state;
};


// // find product active by idUser
// ProductsManager.myshopping = async (id, options = {}) => {
//   const { logger } = options;

//   const product = await ProductsMSresource.myshopping(id);
//   logger.info(`productsByIdUser details with ${JSON.stringify(id)}`);

//   const detailShopping = await Promise.mapSeries(product, async (products) => {
//     const { idProduct, ...otherData } = products;


//     const [shopping] = await ProductsMSresource.getShoppingByProducts(idProduct);

//     return { shopping, ...otherData };
//   });

//   return detailShopping;
// };

// find product active by idUser
ProductsManager.myshopping = async (id, options = {}) => {
  const { logger } = options;

  const product = await ProductsMSresource.myshopping(id);
  logger.info(`productsByIdUser details with ${JSON.stringify(id)}`);

  return product;
};


ProductsManager.updateimage = async (idimage, body, options = {}) => {
  const { logger } = options;

  const images = await ProductsMSresource.updateimage(idimage, body);

  logger.info(` with ProductsManager.updateimage params: ${JSON.stringify(idimage)}`);

  return images;
};
