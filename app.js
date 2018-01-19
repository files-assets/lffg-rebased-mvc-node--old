/**
 * Dependencies.
 *
 * @private
 */
const consign = require('consign');

/**
 * Gets the app instance from config.
 */
global.app = require('./config/server');

/**
 * Reqire the variables and global functions.
 */
require('./config/ext/variables.js');
require('./config/ext/global-functions.js');

/**
 * Imports the files of controllers,
 * models, routers and others.
 */
consign({ verbose: true })
	.include('./config/db.js')
	.into(app);

consign({ cwd: 'app', verbose: true })
	.include('./models')
	.then('./controllers')
	.then('./routes')
	.into(app);

/**
 * If no page is requested.
 */
app.all('/*', function (req, res, next) {
	res.status(404).render('404');
	next();
});

/**
 * Starts the server,
 * also defining the default port.
 */
const port = process.env.PORT || 80;
app.listen(port, function () {
	console.log('\x1b[33m', `Server available at port ${port}.`);
});
