const CategoryMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:4000' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/category-ms`;


CategoryMSResource.getCategorys = () => HTTPClient.get(`${BASE_URL}/categorys`);
CategoryMSResource.getFavoritesProducts = (idUser) => HTTPClient.get(`${BASE_URL}/productsFavorite/${idUser}`);
