const mysql = require('mysql');

const connection = mysql.createConnection({
    user:process.env.USER,
    host:process.env.HOST,
    port:process.env.SERVER_PORT,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

connection.connect(function(err){
    if(err){
        console.log("error", err.sqlMessage)
    }
    else{
        console.log("Database Connection Established")
    }
})

module.exports = connection;