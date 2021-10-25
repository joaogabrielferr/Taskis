const express = require("express");
const db = require("../db/conn");
const router = express.Router();
const { check, validationResult,body} = require('express-validator');
router.get("/",(req,res) =>{
    res.json({"test" : "teste"});
});

//pega todas as tasks de um usuario
router.get("/:id", async (req,res) =>
{
    try{
    let results = await db.tasksuser(req.params.id);
    res.json(results);
    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

//cria uma nova task no bd
router.post("/",[body('un').trim().escape(),body('description').trim().escape()],  async (req,res) =>{

    try{
        let d = req.body;
        let results = await db.posttask(d.un,d.title,d.description,d.duedate,d.priority,d.concluded,d.archived);
        res.status(200).send("Task created in the database");
    }catch(err)
    {
            res.send(err);
    }
});

//deleta task
router.delete("/:id", async (req,res) =>{
    try{
        await db.deletetask(req.params.id);
        res.status(200).send("task was deleted");
    }catch(err)
    {
        res.send(err);
    }
});

//att task
router.put("/:id",async (req,res) =>{
    try{
        await db.attconcluida(req.params.id);
        res.status(200).send("task was updated, now it is concluded");
    }catch(err)
    {
        res.send(err);
    }
});

//verifica se existe um usuario no bd com o dado username e password
router.post("/user",[body('username').trim().escape(),body('password').trim().escape()], async (req,res) =>{
    try{
        let results = await db.user(req.body.username,req.body.password);
        res.json(results);
    }catch(err)
    {
        res.send("N");
    }
});

//verifica se existe um usuario no bd com o dado username

router.post("/user/check",[body('username').trim().escape()],async (req,res) =>{
    try{
        let results = await db.checkuser(req.body.username);
        res.json(results);
    }catch(err)
    {
        res.send("ERRO:",err);
    }
});

//cria usuario no bd com o dado username e password
router.post("/user/create",[body('username').trim().escape(),body('password').trim().escape()], async (req,res) =>{
    try{

        await db.createuser(req.body.username,req.body.password);
        res.status(200).send("user created in the database");
    }catch(err)
    {
        res.status(400).send(err);
    }
});

module.exports = router;