const mongoose = require('mongoose');

const Task = new mongoose.Schema({
        username:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:false
        },
        duedate:{
            type:String,
            required:false
        },
        priority:{
            type:Number,
            required:true
        },
        concluded:{
            type:Number,
            required:true
        }
});

const TaskModel = mongoose.model('task',Task);

module.exports = TaskModel;