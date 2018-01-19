/**
 * This file passes pre-defined variables to the application.
 * If you need a variable present in all views, add it here.
 * And use in the view as exemplified below (pug syntax):
 *
 *     span= variable
 *
 * Reference:
 *  - http://expressjs.com/pt-br/4x/api.html#app.locals
 */

/**
 * Name of the application.
 */
app.locals.appName = 'NodeJS and Express MVC App'

/**
 * Application Url.
 */
app.locals.baseUrl = 'http://localhost/';

/**
 * The default content of the title (<title>) tag.
 */
app.locals.pageTitle = 'NodeJS & Express';
