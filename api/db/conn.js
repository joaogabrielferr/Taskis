const mysql = require("mysql");

const pool = mysql.createPool(
    {
        connectionLimit : 10,
        host            : '127.0.0.1',
        user            : 'root',
        password        : '',
        database        : 'taskis'
    }
);

let mydb = {};

mydb.tasksuser = (id) =>{
    return new Promise((resolve,reject) =>{
        pool.query("SELECT * FROM tasks WHERE userid = ?",[id],(err,results)=>{
            if(err)
            {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = mydb;