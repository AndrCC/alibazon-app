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
    const subcategory = req.params.categoryId || 'all';
    //const page = req.query.page || 1;

    const products = subcategory === 'all' ? await getAllProducts() : await getProductsFromSubcategory(subcategory);

    res.render(
        path.join(getDirname(), 'views', 'products', 'product-list'), { products, subcategory });
})

exports.getProduct = asyncWrapper(async (req, res) => {
    const productId = req.params.id;
    const [product] = await getSingleProduct(productId);
    res.render(path.join(getDirname(), 'views', 'products', 'product-details'), { product });
});

exports.getSearchProducts = asyncWrapper(async (req, res) => {
    const { searchText } = req.query;
    let products = [];
    const categories = await getAllCategories();

    if (searchText) {
        const returnedCat = categories.page_description;
        products = await getProductsFromSubcategory(returnedCat.id);

    }
    res.render(
        path.join(getDirname(), 'views', 'products', 'products-search'),
        { products }
    );
});