const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const user = new Schema({
     firstname:{
        type:String
     },
     name:{
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
    email:{
        type:String
   },
   
 })

 module.exports = mongoose.model('user', user)

 