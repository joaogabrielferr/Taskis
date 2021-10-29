const express = require("express");
const db = require("../db/conn");
const router = express.Router();
const { check, validationResult,body} = require('express-validator');
router.get("/",(req,res) =>{
    res.json({"test" : "teste"});
});

const UserModel = require("../models/Users");
const TaskModel = require("../models/Task");



// router.put("/atualizamongodb",async (req,res)=>{
//     try{
//     const updatedtask = {
//         title:"TROQUEI O TITULO FODASSSSS"
//     }

//     await TaskModel.updateOne({_id:"617bf9f94b6b08cd64b34ea8"},{$set:updatedtask});
//     res.send("mudou a task");
//     }catch(err)
//     {
//         res.send(err);
//     }
// });


//pega todas as tasks de um usuario
// router.get("/:id", async (req,res) =>
// {
//     try{
//     let results = await db.tasksuser(req.params.id);
//     res.json(results);
//     }catch(err)
//     {
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

//pega todas as tasks de um usuario
router.get("/:id",async (req,res)=>{
    
    await TaskModel.find({username:req.params.id},(error,results)=>{
        if(error)res.status(500).send(error);
        res.json(results);
    });
});



// //cria uma nova task no bd
// router.post("/",[body('un').trim().escape(),body('description').trim().escape()],  async (req,res) =>{

//     try{
//         let d = req.body;
//         let results = await db.posttask(d.un,d.title,d.description,d.duedate,d.priority,d.concluded,d.archived);
//         res.status(200).send("Task created in the database");
//     }catch(err)
//     {
//             res.send(err);
//     }
// });

//cria uma nova task no bd
router.post("/",[body('un').trim().escape(),body('description').trim().escape(),body('title').trim().escape()], async (req,res)=>{

    try{
        let d = req.body;
        const task = new TaskModel({username:d.un,title:d.title,description:d.description,duedate:d.duedate,
        priority:d.priority,concluded:d.concluded});
        await task.save();
        res.status(200).send("Task created in the database");
    }catch(err)
    {
        res.status(400).send(err);
    }

});


//deleta task
// router.delete("/:id", async (req,res) =>{
//     try{
//         await db.deletetask(req.params.id);
//         res.status(200).send("task was deleted");
//     }catch(err)
//     {
//         res.send(err);
//     }
// });

//deletatask
router.delete("/:id", async (req,res) =>{
    try{
        await TaskModel.deleteOne({_id:req.params.id});
        res.status(200).send("task was deleted");
    }catch(err)
    {
        res.send(err);
    }
});

//att task
// router.put("/task",
// [body('id').trim().escape(),body('title').trim().escape(),body('description').trim().escape()],async (req,res) =>{
//     try{
//         let d = req.body;
//         await db.editatask(d.id,d.title,d.description,d.duedate,d.priority);
//         res.status(200).send("task was updated");
//     }catch(err)
//     {
//         res.send(err);
//     }
// });

//att task
router.put("/task",
[body('id').trim().escape(),body('title').trim().escape(),body('description').trim().escape()], async (req,res)=>{

    try{
        const taskatualizada = {
            title : req.body.title,
            description : req.body.description,
            duedate : req.body.duedate,
            priority : req.body.priority
        }

        await TaskModel.updateOne({_id:req.body.id},{$set:taskatualizada});
        res.status(200).send("task was updated");

    }catch(err)
    {
        res.send(err);
    }

})



// router.put("/atualizamongodb",async (req,res)=>{
//     try{
//     const updatedtask = {
//         title:"TROQUEI O TITULO FODASSSSS"
//     }

//     await TaskModel.updateOne({_id:"617bf9f94b6b08cd64b34ea8"},{$set:updatedtask});
//     res.send("mudou a task");
//     }catch(err)
//     {
//         res.send(err);
//     }
// });



//att task concluida
// router.put("/:id",async (req,res) =>{
//     try{
//         await db.attconcluida(req.params.id);
//         res.status(200).send("task was updated, now it is concluded");
//     }catch(err)
//     {
//         res.send(err);
//     }
// });

//att task concluida
router.put("/:id", async (req,res) =>{
    try{
        const taskatt = {concluded : 1};
        await TaskModel.updateOne({_id : req.params.id},{$set:taskatt});
    }catch(err)
    {
        res.send(err);
    }

});


//retorna se existe um usuario no bd com o dado username e password
// router.post("/user",[body('username').trim().escape(),body('password').trim().escape()], async (req,res) =>{
//     try{
//         let results = await db.user(req.body.username,req.body.password);
//         res.json(results);
//     }catch(err)
//     {
//         res.send("N");
//     }
// });

//retorna um usuario no bd com o dado username e password
router.post("/user",[body('username').trim().escape(),body('password').trim().escape()],async (req,res)=>{
    await UserModel.find({username:req.body.username,password:req.body.password},(error,results)=>{
        if(error)res.send("N");
        else res.json(results);
    });
});



//verifica se existe um usuario no bd com o dado username

// router.post("/user/check",[body('username').trim().escape()],async (req,res) =>{
//     try{
//         let results = await db.checkuser(req.body.username);
//         res.json(results);
//     }catch(err)
//     {
//         res.send("ERRO:",err);
//     }
// });


//verifica se existe um usuario no bd com o dado username
router.post("/user/check",[body('username').trim().escape()],async (req,res) =>{
    await UserModel.find({username:req.body.username} ,(error,results)=>{
        if(error)res.send(error);
        res.json(results);
    });
});

//cria usuario no bd com o dado username e password
// router.post("/user/create",[body('username').trim().escape(),body('password').trim().escape()], async (req,res) =>{
//     try{

//         await db.createuser(req.body.username,req.body.password);
//         res.status(200).send("user created in the database");
//     }catch(err)
//     {
//         res.status(400).send(err);
//     }
// });


//cria um usuario no bd com o dado username e password
router.post("/user/create",[body('username').trim().escape(),body('password').trim().escape()],async (req,res)=>{
    try{
        const user = new UserModel({username:req.body.username,password:req.body.password});
        await user.save();  
        res.status(200).send("user created in the database"); 
    }catch(err)
    {
        res.status(400).send(err);
    }
});



module.exports = router;