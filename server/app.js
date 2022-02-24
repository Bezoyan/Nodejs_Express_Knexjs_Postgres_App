const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan');

const config = require('./configs/index');
const router = require('./routes');

const app = express();

if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
}

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handlers
  
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err
      });
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: {}
    });
  });

  module.exports = app.listen(config.port, () => {
    console.log(`Running on PORT ${config.port}`)
});