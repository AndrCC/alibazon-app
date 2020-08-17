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

exports.getSingleCategory = async id => {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com/api//categories/${id}?secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom`);
        const singleCategories = await response.json();
        return singleCategories;
    } catch (error) {
        throw error
    }
}
