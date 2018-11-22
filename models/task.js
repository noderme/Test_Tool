const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const task = new Schema({
     subject:{
        type:String
     },
     technologies:{
        type:String
     },
    duration:{
        type:String
      },
    task_file:{
         type:Schema.Types.ObjectId,ref:'task_detail'
    },
    user:[{type:Schema.Types.ObjectId, ref:'user'}]
 })

 module.exports = mongoose.model('task', task)