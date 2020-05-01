const express = require('express');

const router = express.Router();
const PaymentsController = require('./PaymentsController');

router.post('/', PaymentsController.create);
router.post('/success', PaymentsController.success);
router.post('/payout', PaymentsController.payout);


module.exports = router;
