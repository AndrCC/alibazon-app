module.exports = function (app) {
  const { getHome } = require("../controllers/homeController");

  app.get("/", getHome);


  // fallthrough error handler
  app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(err + "\n");
  });
};


