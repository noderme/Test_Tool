const express = require('express');
const mongoose = require('mongoose');

//app = require('./app')('express');

const mongoURl = 'mongodb://localhost:27017/prove';
//const mongoURl = 'mongodb://hareesh_tate:tate_007@ds141274.mlab.com:41274/tate_noder';
const options = {
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  useNewUrlParser:true
};

mongoose.connect(mongoURl, options,function(error){
    if(error)
      console.log(error);
});


const connection = mongoose.connection;

connection.once('open',() => {
console.log('Database connected');

});
connection.on('error',(err) => {
  console.log(err)
});

// const cluster = require('cluster');
// const cpuStrength = require('os').cpus().length;

// if(cluster.isMaster){
//   console.log(`Master process is ${process.pid}`)
//   for (let process=0; process<cpuStrength;process++){
//     cluster.fork()
//   }

// }else{

//   app.all('/*', function(req, res) {res.sendStatus(200).send('process ' + process.pid + ' says hello!').end();})

//   console.log(`Worker process is ${process.pid}`)
//   
// }


module.exports = mongoose;