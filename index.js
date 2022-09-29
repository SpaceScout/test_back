const PORT = "4999"
const certificate_router = require('./routes/certificate.routes')
const express = require("express")
const sequelize = require('./db')
const models = require('./models/models')

const app = express()

app.use(express.json())
app.use('/api', certificate_router)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('успешное подклюение к бд');
        app.listen(PORT, () => console.log("сервер работает"))
    } catch (error) {
        console.log("ошибка: " + error);
    }
}


start();