
const certificate_router = require('./routes/certificate.routes')
const auth_router = require('./routes/auth.routes')
const express = require("express")
const sequelize = require('./db')
const user_module = require('./models/user.model')
const admin_module = require('./models/admin.model')
const certificate_module = require('./models/cetrificate.model')
const role_module = require('./models/role.model')
const token_model = require('./models/token.model')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = "4999"

app.use(express.json())
app.use('/api', certificate_router)
app.use('/auth', auth_router)
app.use(cookieParser())

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