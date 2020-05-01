const express = require('express');

const router = express.Router();
const notificationController = require('./notificationscontroller');
const token = require('../utils/token');

router.post('/send', token.Verfy, notificationController.sendNotification);
router.post('/registerTokendevice', notificationController.registerDevice);
router.put('/updateToken/:idUser', token.Verfy, notificationController.updateTokendevice);
router.get('/getToken/:idUser', notificationController.getToken);
router.get('/getDevices', notificationController.getDevices);
module.exports = router;
