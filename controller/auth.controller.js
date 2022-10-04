const User = require('../models/user.model')
const Role = require('../models/role.model')

class AuthController{
    async registration(req, res){
        try {

        }catch (e){

        }

    }

    async login(req, res){
        try {

        }catch (e){

        }
    }

    async getUsers(req, res){
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