var express = require('express');
var router = express.Router();
const UserController = require('../controllers/users')
/* GET users listing. */
router.get('/', function(req, res) {
  res.sendStatus(200).json(process.pid);
});

var User = require('../models/user')
router.use('/',function(req,res,next){
  //Rename field

  // User.updateMany({}, { $rename: { firstname: 'name' } }, { multi: true }, function(err, blocks) {
  //   if(err) { throw err; }
  //  next();
  // });

  // Remove document where field not exists
  
  // User.remove({user_type:{$exists:false}}, function(err, res){
  //   console.log(res)
  //   next()
  // })
  next()
})

router.route('/user')
  .post((req,res) => {
    UserController.createUser(req,res);
  })

  .get((req,res)=>{
    UserController.getUsers(req,res);
  })

router.get('/login', (req,res) =>{
    res.render('login')
});

router.post('/login', (req,res) =>{
  UserController.loginUser(req,res);
});

module.exports = router;
