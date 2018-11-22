const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const user = new Schema({
     firstname:{
        type:String
     },
     lastname:{
        type:String
     },
    username:{
        type:String
      },
    password:{
        type:String
    },
    user_type:{
        type:String
   },
   
 })

 module.exports = mongoose.model('user', user)

 