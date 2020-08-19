const express = require('express');
//const Sentry = require('@sentry/node');
const path = require('path');
const homeRoute = require('./routes/index');
const categoriesRoute = require('./routes/categories');
const productsRoute = require('./routes/products');

const app = express();

//configure express
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', homeRoute);
app.use('/categories', categoriesRoute);
app.use('/products', productsRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

//module.exports = app;