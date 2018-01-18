# MVC - NodeJS `1.0.0`

Estrutura MVC para a criação de aplicações em um ambiente NodeJS.  

## Instalação

Para efetuar a instalação, faça o [download deste repositório](https://github.com/lffg/mvc-node/archive/master.zip) e instale as dependências necessárias:
```shell
$ npm install
```

## Notas

### Versionamento

A aplicação foi desenvolvida com as seguintes versões:

* NodeJS `8.9.3`;
* NPM `5.5.1`;
* As demais dependências podem ser consultadas no arquivo [`package.json`](https://github.com/lffg/mvc-node/blob/master/package.json).

### Informações acerca do uso de uma base de dados

Caso você esteja usando uma base de dados MongoDB, você deve alterar as configurações iniciais no arquivo [`db.js` (linha 14)](https://github.com/lffg/mvc-node/blob/master/config/db.js#L14) com as informações referentes à sua base de dados.

### _View Engine_

A _view engine_ padrão deste projeto é [ejs](http://www.embeddedjs.com/).  
Uma possível alteração pode ser feita no arquivo [`server.js` (linha 28)](https://github.com/lffg/mvc-node/blob/master/config/server.js#L28). 

## Licença

Código sob a [Licença MIT](https://github.com/lffg/mvc-node/blob/master/LICENSE).
