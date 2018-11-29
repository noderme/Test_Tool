var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const con = require('consolidate');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// assign the swig engine to .html files
app.engine('html', con.swig);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const server = require('./server')
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const cluster = require('cluster');
const cpuStrength = require('os').cpus().length;

// if(cluster.isMaster){
//   console.log(`Master process is ${process.pid}`)
//   for (let process=0; process<cpuStrength;process++){
//     cluster.fork()
//   }

//   cluster.on('exit', function(worker){
//     cluster.fork()
//   })

// }else{
  require('dotenv').config()
  

  console.log(`Worker process is ${process.pid}`)
  app.listen(process.env.PORT)  
// }

module.exports = app;