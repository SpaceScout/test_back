const user_model = require('../models/user.model')
const role_model = require('../models/role.model')
const jwt = require('jsonwebtoken')
const token_model = require('../models/token.model')
const userService = require('../services/user.service')

class AuthController{
    async registration(req, res)
    {
        try {
            const name = req.body.name
            const password = req.body.password
            const userData = await userService.registration(name, password)
            //res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            console.log(userData)
            return res.json(userData);
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