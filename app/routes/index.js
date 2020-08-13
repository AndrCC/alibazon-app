module.exports = function (app) {
  const fetch = require("node-fetch");

  const CategoriesController = require('../controllers/CategoriesController')
  const ProductsController = require('../controllers/ProductsController')

  const url = "https://osf-digital-backend-academy.herokuapp.com/api//categories/mens?secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom"

  async function getAllCategories() {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }

  //Home
  app.get('/', function (req, res) {
    const data1 = getAllCategories()
    res.render('index', { data1: data1 });
  });

  //Categories
  app.get('/categories/mens', CategoriesController.mensIndex);
  app.get('/categories/womans', CategoriesController.womansIndex);
  app.get('/categories/mens/mens-clothing', CategoriesController.mensClothingIndex);
  app.get('/categories/womans/womans-clothing', CategoriesController.womansClothingIndex);

  //Products
  app.get('/products/mens', ProductsController.mensProducts);
  app.get('/products/womans', ProductsController.womansProducts);


  // fallthrough error handler
  app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(err + '\n');
  });
}
