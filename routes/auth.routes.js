const Router = require('express')
const router = new Router()
const Authcontroller = require('../controller/auth.controller')

router.post('/registration', Authcontroller.registration)
router.post('/login', Authcontroller.login)
router.get('/user', Authcontroller.getUsers)

module.exports = router