const TaskDetail = require('../models/task_detail');
const Task = require('../models/task');


exports.createTask = async (req,res) =>{

const {subject,technologies,duration} = req.body;

const {path,originalname} = req.file;

const task_detail = new TaskDetail({
  path:path,
  filename:originalname,
});

const taskfile = await task_detail.save();

const task = new Task({
  subject:subject,
  technologies:technologies,
  duration:duration,
  task_file:taskfile._id,
  user:'5bf5fbef16a06667027eecc2'
});

const taskInfo =await  task.save();

const getTask = await Task.find().populate('task_file').populate('user').exec();

console.log(getTask.task_file)
res.send(getTask);

}

exports.deleteAll =(req,res) =>{
    Task.remove().then(tasks => res.send(tasks))
}

exports.mytasks = function(req,res){
  Task.find({'user._id':'5bf5fbef16a06667027eecc2'}).then( task =>{
    res.render('addWorkspace')
  })
}
