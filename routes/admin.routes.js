const Router = require('express')
const router = new Router()
adminController = require('../controller/admin.controller.js')

router.post('/new_certificate', adminController.new_certificate)
router.post("/login", adminController.login)

module.exports = router