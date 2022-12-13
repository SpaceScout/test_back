const Router = require('express').Router
const router = new Router()
const AdminController = require('../controller/admin.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/new_certificate', authMiddleware, AdminController.new_certificate)
router.post('/login', AdminController.login)

module.exports = router