const express = require("express");
const db = require("../db/conn");
const router = express.Router();

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
router.post("/", async (req,res) =>{

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

//verifica se existe um usuario no bd com o dado username e password
router.post("/user", async (req,res) =>{
    try{
        let results = await db.user(req.body.username,req.body.password);
        res.json(results);
    }catch(err)
    {
        res.status(500).send(err);
    }
});

//cria usuario no bd com o dado email
router.post("/user/create", async (req,res) =>{
    try{
        await db.createuser(req.body.username,req.body.password);
        res.status(400).send("user created in the database");
    }catch(err)
    {
        res.status(500).send(err);
    }
});

module.exports = router;