const express = require("express");
const db = require("../db/conn");
const router = express.Router();

router.get("/",(req,res) =>{
    res.json({"test" : "teste"});
});

router.get("/:id", async (req,res) =>
{
    try{
    let results = await  db.tasksuser(req.params.id);
    res.json(results);
    }catch(err)
    {
        console.log(err);
        res.status(500).send("There is a problem");
    }
});


module.exports = router;