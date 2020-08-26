const express = require('express');
const router = express.Router();
const {
    getProduct,
    getProducts,
    getSearchProducts
} = require('../controllers/products');

router.get('/search', getSearchProducts);


router.get('/:categoryId', getProducts);
router.get('/:categoryId/:id', getProduct);

module.exports = router;