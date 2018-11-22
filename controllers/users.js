const User = require('../models/user')


exports.createUser = function(req,res){

    const {firstname,lastname,username,password,user_type} = req.body;

    const user = new User({
        firstname:firstname,
        lastname:lastname,
        username:username,
        password:password,
        user_type:user_type
    });

    user.save().then(user => { res.send(user)})
    .catch(err => console.log(err))
}


exports.loginUser = function(req,res){

    const {username,password} = req.body;

   User.findOne({username:req.body.username}).then(user => {
    console.log(user)
       if(user.password == password){
        
           if(user.user_type === 'employer'){
               res.render('addtask');
           }else{
            res.render('addtask');
           }
       }
   })
}