const User = require('../models/user')


exports.createUser = function(req,res){

    const {name,lastname,username,password,user_type} = req.body;

    const user = new User({
        name:name,
        lastname:lastname,
        username:username,
        password:password,
        user_type:user_type
    });

    user.save().then(user => { res.json(user)})
    .catch(err => console.log(err))
}

exports.getUsers = async function(req,res){
    const users = await User.find().exec()
    console.log(users)
    res.status(200).send(users)
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