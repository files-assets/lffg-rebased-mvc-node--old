module.exports = function (app) {
  const index = app.controllers.index;

  app.get('/', index.index);
  app.post('/', index.post);
};
