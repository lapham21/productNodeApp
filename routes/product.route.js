const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

// test
router.get('/test', productController.test);

router.post('/create', productController.product_create);

module.exports = router;