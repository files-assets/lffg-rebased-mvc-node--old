/**
 * Dependencies.
 *
 * @private
 */
const express   = require('express');
const parser    = require('body-parser');
const validator = require('express-validator');
const session   = require('express-session');

/**
 * Creates the app variable.
 */
let app = express();

/**
 * Sets the default headers.
 */
app.use(function (req, res, next) {
  res.set('X-Powered-By', 'NodeJS');
  next();
});

/**
 * Sets the default view engine and path to views.
 */
app.set('view engine', 'pug');
app.set('views', './public/views');

/**
 * Initializes the middlewares.
 */
app.use('/assets', express.static('./public/assets'));
app.use(parser.urlencoded({ extended: true }));
app.use(validator());
app.use(session({
	secret: 'key-Conf-ss',
	resave: false,
	saveUninitialized: false
}));

/**
 * @public
 */
module.exports = app;
