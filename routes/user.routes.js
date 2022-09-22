const Router = require("express")
const router = new Router()
const userController = require('../controller/user.controller')

router.get("/user/:id", userController.get_one_user)
router.delete("/user/:id", userController.del_user)
router.post("/user", userController.save_user)

module.exports = router