const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

router.post('/create', productController.product_create);

module.exports = router;