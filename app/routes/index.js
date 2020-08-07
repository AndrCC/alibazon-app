module.exports = function (app) {

  // app.get('index.ejs', (req, res) => {
  //   res.send('Welcome to OSF Academy Backend Starter Kit. Have Fun! teste1')
  // });

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/categories/mens', function (req, res) {
    res.render('categories/mens');
  });

  app.get('/categories/womans', function (req, res) {
    res.render('categories/womans');
  });

  app.use('/users', require('./UserRoutes'));
  // You can add others app.use with other route files



  // fallthrough error handler
  app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(err + '\n');
  });
}
