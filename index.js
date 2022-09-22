const PORT = "4999"
const userRouter = require('./routes/user.routes')
const express = require("express")
const app = express()
const sequelize = require('./db')

app.use(express.json())
app.use('/api', userRouter)

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('успешное подклюение к бд');
        app.listen(PORT, () => console.log("сервер работает"))
    } catch (error) {
        console.log(error);
    }
}

start();