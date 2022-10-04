const PORT = "4999"
const certificate_router = require('./routes/certificate.routes')
const auth_router = require('./routes/auth.routes')
const express = require("express")
const sequelize = require('./db')
const user_module = require('./models/user.model')
const admin_module = require('./models/admin.model')
const certificate_module = require('./models/cetrificate.model')
const role_module = require('./models/role.model')

const app = express()

app.use(express.json())
app.use('/api', certificate_router)
app.use('/api', auth_router)

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