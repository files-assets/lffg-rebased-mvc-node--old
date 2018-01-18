/**
 * Dependências.
 *
 * @private
 */
const consign = require('consign');

/**
 * Importar a variável `app` da configuração.
 */
let app = require('./config/server');

/**
 * Autload dos arquivos.
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
 * Iniciar o servidor.
 */
const port = process.env.PORT || 80;
app.listen(port, function () {
	console.log(`Server listening at port ${port}.`);
});
