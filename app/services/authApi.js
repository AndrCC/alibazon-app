const axios = require('axios');

exports.signUp = async data => {
    data.secretKey = '$2a$08$5YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom';
    try {
        const response = await axios.post(`https://osf-digital-backend-academy.herokuapp.com/api//auth/signup`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

exports.signIn = async data => {
    data.secretKey = '$2a$08$5YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom';
    try {
        const response = await axios.post(`https://osf-digital-backend-academy.herokuapp.com/api//auth/signin`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}


