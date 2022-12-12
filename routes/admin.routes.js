const Router = require('express')
const router = new Router()
adminController = require('../controller/admin.controller.js')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/new_certificate', authMiddleware, adminController.new_certificate)
router.post("/login", adminController.login)

module.exports = router