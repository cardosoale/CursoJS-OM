exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {

    console.log();

    console.log(`Vi que você postou ${req.body.cliente}`);

    console.log();

  }
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err && 'EBADCSRFTOKEN' === err.code) {
    return res.render('404');
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
