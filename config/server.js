/**
 * Dependências.
 *
 * @private
 */
const express   = require('express');
const parser    = require('body-parser');
const validator = require('express-validator');
const session   = require('express-session');

/**
 * Instanciar a variável `app`.
 */
let app = express();

/**
 * Setar os cabeçalhos padrão:
 */
app.use(function (req, res, next) {
  res.removeHeader('X-Powered-By');
  next();
});

/**
 * Setar a view engine padrão para este projeto (`ejs`)
 * e o caminho padrão para a renderização das views.
 */
app.set('view engine', 'ejs');
app.set('views', './public/views');

/**
 * Condiguração de middlewares, em ordem:
 *  1. Express Static    (para arquivos estáticos);
 *  2. Body Parser       (para recebimento de dados via requisições);
 *  3. Express Validator (para executar validações);
 *  4. Express Session   (para o gerenciamento de sessões).
 */
app.use('/assets', express.static('./public/assets'));
app.use(parser.urlencoded({ extended: true }));
app.use(validator());
app.use(session({
	secret: 'ssUS3R1NF0B4S1Css',
	resave: false,
	saveUninitialized: false
}));

/**
 * Exportação da variável `app`.
 *
 * @public
 */
module.exports = app;
