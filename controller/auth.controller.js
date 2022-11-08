const userService = require('../services/user.service')
const tokenService = require('../services/token.service')

class AuthController{
    async registration(req, res)
    {
        try {
            const name = req.body.name
            const password = req.body.password

            const userData = await userService.registration(name, password)
            console.log(userData)
            
            return res.status(200).json(userData)
        }catch (e){
            console.log(e)
        }

    }

    async login(req, res){
        try {

        }catch (e){

        }
    }

    async getUsers(req, res)
    {
        try {
            const userRole = new Role()
            const adminRole = new Role({value:"ADMIN"})
            userRole.save()
            adminRole.save()
            res.json('sozdal vse')
        }catch (e){

        }
    }
}
module.exports = new AuthController()