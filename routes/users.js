var express = require('express');
var router = express.Router();
const UserController = require('../controllers/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.route('/user')
  .post((req,res) => {
    UserController.createUser(req,res);
  })

router.get('/login', (req,res) =>{
    res.render('login')
});

router.post('/login', (req,res) =>{
  UserController.loginUser(req,res);
});

module.exports = router;
