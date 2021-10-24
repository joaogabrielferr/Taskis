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

//get as tasks do usuario
mydb.tasksuser = (username) =>{
    return new Promise((resolve,reject) =>{
        pool.query("SELECT * FROM task WHERE username = ?",[username],(err,results)=>{
            if(err)
            {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//cria nova task no db
mydb.posttask = (username,title,desc,date,prio,conc,arc) =>{

    return new Promise((resolve,reject) =>{
        pool.query('INSERT INTO task VALUES(DEFAULT,?,?,?,?,?,?,?)',[username,title,desc,date,prio,conc,arc],(err,results)=>{
            if(err)
            {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

mydb.deletetask = (id) =>{

    return new Promise((resolve,reject) =>{
    pool.query("DELETE FROM task WHERE id = ?",[id],(err,results) =>{
        if(err){
            return reject(err);
        }
        return resolve(results);
    });
    });
};

//add user
mydb.createuser = (username,password) =>{

    return new Promise((resolve,reject) =>{
        pool.query('INSERT INTO users VALUES(?,?)',[username,password],(err,results) =>{
            if(err)
            {
                return reject(err);
            }
                return resolve(results);
        });
    });
};

//seleciona user
mydb.user = (username,password) =>{
    return new Promise((resolve,reject) =>{
        pool.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,password],(err,results) =>{
            if(err)
            {
                return reject(err);
            }
                return resolve(results);
        });
    });   
}

mydb.attconcluida = (id) =>{
    return new Promise((resolve,reject) =>{
        pool.query('UPDATE task SET concluded = 1 WHERE id = ?',[id],(err,results) =>{
            if(err)
            {
                return reject(err);
            }
                return resolve(results);
        });
    });
}

module.exports = mydb;