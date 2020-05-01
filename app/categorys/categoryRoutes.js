const express = require('express');

const router = express.Router();
const CategoryController = require('./CategoryController');
const token = require('../utils/token');

router.get('', token.Verfy, CategoryController.listCategory);
module.exports = router;
