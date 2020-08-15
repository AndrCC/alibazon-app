module.exports = function (app) {
  const fetch = require("node-fetch");
  const { getHome } = require("../controllers/homeController");


  const categories = "https://osf-digital-backend-academy.herokuapp.com/api//categories?secretKey=%242a%2408%245YaaU3vMXpnFBA21qgPEYOHd1gCzqgpWrm82TznzvLlIm3jN3dgom"

  //Home
  app.get("/", getHome);

  // fallthrough error handler
  app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(err + "\n");
  });
};
