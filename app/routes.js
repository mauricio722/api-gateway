const express = require('express');
const productsRouter = require('./products/productsrouter');
const CategoryRoutes = require('./categorys/categoryRoutes');
const authRouter = require('./auth/authrouter');
const noticationsRouter = require('./notifications/notificationsrouter');
const PaymentsRoutes = require('./payments/PaymentsRoutes');


const router = express.Router();
router.use('/categories', CategoryRoutes);
router.use('/products', productsRouter);
router.use('/users', authRouter);
router.use('/notifications', noticationsRouter);
router.use('/payments', PaymentsRoutes);


module.exports = router;
