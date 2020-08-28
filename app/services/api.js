const fetch = require("node-fetch");

exports.getAllCategories = async () => {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com/api//categories?secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom`);
        const allCategories = await response.json();
        return allCategories;
    } catch (error) {
        throw error
    }
}

exports.getRootCategories = async root => {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com/api//categories/parent/${root}?secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom`);
        const rootCategories = await response.json();
        return rootCategories;
    } catch (error) {
        throw error
    }
}

exports.getSingleCategory = async input => {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com/api//categories/${input}?secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom`);
        const singleCategorie = await response.json();
        return singleCategorie;
    } catch (error) {
        throw error
    }
}

exports.getAllProducts = async (searchText) => {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com/api//products/product_search=${searchText}?secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom`);
        const allProducts = await response.json();
        return allProducts;
    } catch (error) {
        throw error
    }
}

exports.getSingleProduct = async (id) => {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com/api//products/product_search?id=${id}&secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom`);
        const singleProduct = await response.json();
        return singleProduct;
    } catch (error) {
        throw error
    }
}

exports.getProductsFromSubcategory = async (subcategory) => {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com/api//products/product_search?primary_category_id=${subcategory}&secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom`);
        const productsFromSubcategory = response.json();
        return productsFromSubcategory;
    } catch (error) {
        throw error
    }
}