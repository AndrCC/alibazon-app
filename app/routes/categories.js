module.exports = function (app) {
    const { getCategories } = require('/controllers/categoriesController');


    app.get('/:id', getCategories);
}