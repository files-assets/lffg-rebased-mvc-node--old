module.exports.index = function (req, res) {
  res.render('index');
};

module.exports.post = function (req, res) {
  req.assert('term').notEmpty();

  let data = req.body;
  let err  = req.validationErrors();

  if (err) {
    res.render('index', {
      'error': 'You must type something below.'
    });
    return;
  }

  res.render('index', { 'term': req.body.term });
};
