

const PORT = "4999"
const express = require("express")
const app = express()
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: "4999",
    user: "root",
    database: "firstDB",
    password: "123"
});

connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

app.listen(PORT, () => console.log("писька"))