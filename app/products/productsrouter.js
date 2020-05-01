const express = require('express');

const router = express.Router();
const productscontroller = require('./productscontroller');
const token = require('../utils/token');

router.get('/history/:idusuario', token.Verfy, productscontroller.getSoldProducts);
router.get('/', token.Verfy, productscontroller.getproducts);
router.get('/:id', token.Verfy, productscontroller.getproductsbyid);
router.get('/categorys/:id', token.Verfy, productscontroller.getproductsbycategory);
router.get('/name/:name', token.Verfy, productscontroller.getproductsbyname);
router.post('/', token.Verfy, productscontroller.postRegisterProducts);
router.post('/images', token.Verfy, productscontroller.registerimages);
router.get('/images/:idproduct', productscontroller.getproductswithimages);
router.delete('/delete/:id', token.Verfy, productscontroller.deleteproduct);
router.put('/update/:id', token.Verfy, productscontroller.updateproduct);
router.get('/getuser/:idUser', token.Verfy, productscontroller.getUser);
router.get('/getUsers/:idUser', token.Verfy, productscontroller.getUsers);
router.get('/favoriteProducts/:idUser', token.Verfy, productscontroller.favoriteProductsForIdUser);
router.post('/favoriteProducts', token.Verfy, productscontroller.createFavoriteProducts);
router.put('/close/:id', token.Verfy, productscontroller.closeoffer);
router.get('/myshopping/:idUser', token.Verfy, productscontroller.myshopping);
router.post('/myshopping/create', token.Verfy, productscontroller.createShoppingProducts);
router.get('/favoriteProducts/products/:idProject', token.Verfy, productscontroller.getFavoriteProductsByProducts);
router.delete('/favoriteProducts/:id', productscontroller.deleteFavoriteProducts);
router.put('/images/:id', token.Verfy, productscontroller.updateimage);
router.get('/navigation/:idUser', token.Verfy, productscontroller.NavigatorProductsForIdUser);
router.post('/navigation/create', token.Verfy, productscontroller.createNavigation);
router.get('/navigation/products/:idProject', token.Verfy, productscontroller.getNavigationByProducts);
router.delete('/deletenavigationproduct/:id', token.Verfy, productscontroller.deleteNavigation);
router.get('/shopping/products/:idProject', token.Verfy, productscontroller.getShoppingByProducts);
router.delete('/deleteshoppingproduct/:id', token.Verfy, productscontroller.deleteShopping);
router.get('/suggestions/:iduser', productscontroller.getsuggestions);
router.get('/maxsuggestion/:idCategory/cost/:cost', productscontroller.getmaxsuggestion);
router.get('/maxnavigation/:idUser', productscontroller.getmaxnavigation);
router.get('/maxnavigation/:idUser', productscontroller.getmaxnavigation);
router.get('/paymentsReceived/:idDealer', productscontroller.getPaymentsReceived);
router.get('/productsFavorite/user/:idusuario/product/:idProduct', productscontroller.getFavoriteProductsByIdUserAndIdProducts);


module.exports = router;
