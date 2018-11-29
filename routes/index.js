var express = require('express');
var router = express.Router();

const TaskController = require('../controllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  
});

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

router.get('/kill', (req,res)=>{
  process.exit()
})

router.route('/addTask')
  .post(upload.single('taskfile'), async function(req,res,next){
    TaskController.createTask(req,res);    
  })

  .get(function(req,res){
    res.render('addtask');
  })

  .delete(function(req,res){
    TaskController.deleteAll(req,res);
  });

  

router.route('/signup')
  .post(async function(req,res){
    res.render('signup')
  })

  .get(function(req,res){
    
  })

  .delete(function(req,res){
    
  });
 
router.get('/mytasks', function(req,res){
  TaskController.mytasks(req,res)
});

const archive = require('../controllers/archiver');

router.get('/getDetails', function(req,res){
  console.log('Started')
})

router.post('/workspace', (req,res)=>{
  
archive.archive()

})

module.exports = router;
