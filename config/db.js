/**
 * Dependências.
 *
 * @private
 */
const mongo = require('mongodb');

/**
 * Configurações da base de dados.
 *
 * @private
 */
const dbConfig = {
	name      : 'database-name',
	url       : 'localhost',
	port      : 27017,
	serverOpts: {},
	dbOpts    : {}
};

/**
 * Inicialização da base de dados.
 *
 * @private
 */
let server = new mongo.Server(dbConfig.url, dbConfig.port, dbConfig.serverOpts);
let db     = new mongo.Db(dbConfig.name, server, dbConfig.dbOpts);

module.exports = function () {
	return function () {
		return db;
	};
};
