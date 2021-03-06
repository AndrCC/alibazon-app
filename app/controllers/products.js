const asyncWrapper = require('../util/asyncWrapper');
const getDirname = require('../util/getDirname');
const path = require('path');
const {
    getAllProducts,
    getSingleProduct,
    getProductsFromSubcategory,
    getAllCategories
} = require('../services/api');

exports.getProducts = asyncWrapper(async (req, res) => {
    const subcategory = req.params.categoryId;
    const products = await getProductsFromSubcategory(subcategory);

    res.render(
        path.join(getDirname(), 'views', 'products', 'product-list'), { products, subcategory });
})

exports.getProduct = asyncWrapper(async (req, res) => {
    const [product] = await getSingleProduct(req.params.id);
    res.render(path.join(getDirname(), 'views', 'products', 'product-details'), { product });
});

