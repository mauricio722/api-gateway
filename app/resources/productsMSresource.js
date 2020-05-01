const ProductsMSresource = module.exports;
const HTTPclient = require('../utils/HTTPClient');

const { MICROSERVICE_URL } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/offer-ms`;


ProductsMSresource.getproducts = () => {
  const req = HTTPclient.get(`${BASE_URL}/products`);

  return req;
};

ProductsMSresource.getproductsbyid = (id) => {
  const req = HTTPclient.get(`${BASE_URL}/products/${id}`);

  return req;
};

ProductsMSresource.getproductsbycategory = (id) => {
  const res = HTTPclient.get(`${BASE_URL}/productscategory/${id}`);

  return res;
};

ProductsMSresource.postRegisterProducts = (body) => {
  const req = HTTPclient.post(`${BASE_URL}/products`, body);

  return req;
};

ProductsMSresource.getproductsbyname = (name) => {
  const req = HTTPclient.get(`${BASE_URL}/productsname/${name}`);

  return req;
};

ProductsMSresource.getproductswithimages = (id) => {
  const req = HTTPclient.get(`${BASE_URL}/products/imagesbyuser/${id}`);

  return req;
};

ProductsMSresource.registerimages = (images) => {
  const req = HTTPclient.post(`${BASE_URL}/images`, images);

  return req;
};


ProductsMSresource.deleteproduct = (id) => {
  const req = HTTPclient.delete(`${BASE_URL}/products/${id}`);

  return req;
};

ProductsMSresource.updateproduct = (id, body) => {
  const req = HTTPclient.put(`${BASE_URL}/products/${id}`, body);

  return req;
};


ProductsMSresource.getUser = (id) => {
  const req = HTTPclient.get(`${BASE_URL}/productsUser/${id}`);

  return req;
};


ProductsMSresource.getUsers = (id) => {
  const req = HTTPclient.get(`${BASE_URL}/productsUsers/${id}`);

  return req;
};

ProductsMSresource.getFavoriteProductsForIdUser = (idUser) => HTTPclient.get(`${BASE_URL}/productsFavorite/${idUser}`);


ProductsMSresource.createFavoriteProducts = (body) => HTTPclient.post(
  `${BASE_URL}/productsFavorite`, body,
);

// CLOSE OFFER
ProductsMSresource.closeoffer = (id, body) => {
  const req = HTTPclient.put(`${BASE_URL}/offer/closeoffer/${id}`, body);

  return req;
};

ProductsMSresource.myshopping = (id) => {
  const req = HTTPclient.get(`${BASE_URL}/myShopping/${id}`);

  return req;
};

ProductsMSresource.createShoppingProducts = (body) => HTTPclient.post(
  `${BASE_URL}/myshopping/create`, body,
);

ProductsMSresource.getFavoriteProductsByProducts = (idProduct) => HTTPclient.get(`${BASE_URL}/productsFavorite/product/${idProduct}`);

ProductsMSresource.deleteFavoriteProducts = (id) => HTTPclient.delete(`${BASE_URL}/productsFavorite/${id}`);

ProductsMSresource.updateimage = (idimage, body) => {
  const req = HTTPclient.put(`${BASE_URL}/images/${idimage}`, body);

  return req;
};
// get navigation by iduser
ProductsMSresource.getNavigatorProductsForIdUser = (idUser) => HTTPclient.get(`${BASE_URL}/navigation/${idUser}`);

// create navigation
ProductsMSresource.createNavigation = (body) => HTTPclient.post(`${BASE_URL}/navigation/create`, body);

// get navigation by idprodut
ProductsMSresource.getNavigationByProducts = (idProduct) => HTTPclient.get(`${BASE_URL}/Navigation/product/${idProduct}`);

// delete navigation
ProductsMSresource.deleteNavigation = (id) => HTTPclient.delete(`${BASE_URL}/deleteNavigation/${id}`);

ProductsMSresource.deleteShopping = (id) => HTTPclient.delete(`${BASE_URL}/deleteShopping/${id}`);

ProductsMSresource.getShoppingByProducts = (idProduct) => HTTPclient.get(`${BASE_URL}/shopping/product/${idProduct}`);

// get sold products
ProductsMSresource.getSoldProducts = (idusuario) => HTTPclient.get(`${BASE_URL}/history/${idusuario}`);

ProductsMSresource.getsuggestions = (iduser) => HTTPclient.get(`${BASE_URL}/suggestions/${iduser}`);
ProductsMSresource.getmaxsuggestion = (idCategory, cost) => HTTPclient.get(`${BASE_URL}/maxsuggestion/${idCategory}/cost/${cost}`);

ProductsMSresource.getmaxNavigation = (idUser) => HTTPclient.get(`${BASE_URL}/maxnavigation/${idUser}`);

ProductsMSresource.paymentsReceived = (data) => HTTPclient.post(`${BASE_URL}/paymentsReceived`, data);

ProductsMSresource.deletePaymentsReceived = (id) => HTTPclient.delete(`${BASE_URL}/paymentsReceived/${id}`);

ProductsMSresource.getPaymentsReceived = (idDealer) => HTTPclient.get(`${BASE_URL}/paymentsReceived/${idDealer}`);

ProductsMSresource.getFavoriteProductsByIdUserAndIdProducts = (idProduct, idusuario) => HTTPclient.get(`${BASE_URL}/productsFavorite/user/${idusuario}/product/${idProduct}`);
