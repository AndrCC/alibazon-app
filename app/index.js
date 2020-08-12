const app = require('express')();
const path = require('path');
const ejs = require('ejs');
const Sentry = require('@sentry/node');


//Sentry.init({ dsn: 'https://5ef81c11afad4b80892bce85ba11462d@o433260.ingest.sentry.io/5388033' });
//app.use(Sentry.Handlers.requestHandler());

require('./routes')(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));


app.use(Sentry.Handlers.requestHandler());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

module.exports = app;