module.exports = function (app) {

  const CategoriesController = require('../controllers/CategoriesController')
  const ProductsController = require('../controllers/ProductsController')

  //Home
  app.get('/', function (req, res) {
    res.render('index');
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
