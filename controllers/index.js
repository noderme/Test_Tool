const TaskDetail = require('../models/task_detail');
const Task = require('../models/task');
const User = require('../models/user')

exports.createTask = async (req,res) =>{

const {subject,technologies,duration,email} = req.body;

const {path,originalname} = req.file;

const task_detail = new TaskDetail({
  path:path,
  filename:originalname,
});

const getUser = await User.find({email:email}).exec()

const taskfile = await task_detail.save();

const task = new Task({
  subject:subject,
  technologies:technologies,
  duration:duration,
  task_file:taskfile._id,
  user:getUser._id //user type should be test taker
});

const taskInfo = await  task.save();

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <sonofkotaiah@gmail.com>', // sender address
    to: 'h.pitchikala@student.rug.nl', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Click this link to see the task -- 7sonofkotaiah@gmail.com', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    res.status(201).send('Emmail sent')
});

}

exports.deleteAll =(req,res) =>{
    Task.remove().then(tasks => res.send(tasks))
}

const fs = require('fs');
const readline = require('readline');
const PDFDocument = require('pdfkit')

exports.mytasks = function(req,res){
  

  var readStream= fs.createReadStream('/home/hareesh/Test_Tool/uploads/6966560c1859043ab9e95ecd415b104b')
     
  
var content = "";

readStream.on('data', (input) => {
    content+=input;
    
  });

  readStream.on('close', (cb)=>{
    console.log(content)
    res.render('viewtask',{content:content})
    //console.log(content)
  });


}

var nodemailer = require('nodemailer');


