const fetch = require("node-fetch");
const axios = require('axios');



exports.getChildCategories = async parent => {
    try {
        const categories = await axios.get('https://osf-digital-backend-academy.herokuapp.com/api//categories/parent/${parent}?secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom');
        return categories.data;
    } catch (error) {
        throw error
    }
}