const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/create', productController.product_create);
router.get('/:id', productController.product_details);
router.put('/:id/update', productController.product_update);
router.delete('/:id/delete', productController.product_delete);

module.exports = router;