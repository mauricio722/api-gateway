const categoryController = module.exports;
// const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const CategoryMSResource = require('../resources/CategoryMSResource');
const productscontroller = require('../resources/CategoryMSResource');
const productsManager = require('../resources/CategoryMSResource');
const BaseError = require('../resources/CategoryMSResource');


categoryController.listCategory = async (req, res) => CategoryMSResource.getCategorys()
  .then((response) => res.send(response));


productscontroller.postRegisterProducts = (req, res, next) => {
  const logName = 'GetProducts';
  const logger = req.log || console;
  const { body } = req;

  logger.info('stars productscontroller.getproducts');

  return productsManager.postRegisterProducts(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(console.error(error.message))));
};
