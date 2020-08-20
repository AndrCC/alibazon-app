const express = require('express');
const Sentry = require('@sentry/node');
const path = require('path');
const homeRoute = require('./routes/index');
const categoriesRoute = require('./routes/categories');
const productsRoute = require('./routes/products');
const authRoute = require('./routes/auth');

const app = express();

Sentry.init({ dsn: 'https://5ef81c11afad4b80892bce85ba11462d@o433260.ingest.sentry.io/5388033' });
app.use(Sentry.Handlers.requestHandler());

//configure express
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(Sentry.Handlers.requestHandler());

//routes
app.use('/', homeRoute);
app.use('/categories', categoriesRoute);
app.use('/products', productsRoute);
app.use('/auth', authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

//module.exports = app;