const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 var taskDetail = new Schema({
  path: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true
  }
  
 });

 module.exports = mongoose.model('task_detail', taskDetail);