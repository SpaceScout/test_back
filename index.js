const auth_router = require('./routes/auth.routes')
const express = require("express")
const sequelize = require('./db')
const user_module = require('./models/user.model')
const admin_module = require('./models/admin.model')
const token_model = require('./models/token.model')
const admin_router = require('./routes/admin.routes')
const cookieParser = require("cookie-parser")
const errorMiddleware = require('../test_back/middlewares/error.mddleware')

const app = express()
const PORT = "4999"

app.use(express.json())
app.use('/auth', auth_router)
app.use('/admin', admin_router)
app.use(cookieParser())
app.use(errorMiddleware)

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