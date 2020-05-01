const express = require('express');
const token = require('../utils/token');

const router = express.Router();
const authController = require('./authcontroller');

router.post('/create', authController.create);
router.post('/login', authController.login);
router.put('/update/:idUser', token.Verfy, authController.updateUser);
router.put('/:email/changepassword', authController.changePassword);
router.put('/update/:idUser', authController.updateUser);
router.get('/getUser/:idUser', authController.getUser);
router.put('/recoverPassword/:email', authController.recoverPass);
router.get('/:email', authController.getUserByEmail);


module.exports = router;
