const user_model = require('../models/user.model')
const role_model = require('../models/role.model')
const jwt = require('jsonwebtoken')
const token_model = require('../models/token.model')

class AuthController{
    async registration(req, res)
    {
        try {

            const name = req.body.name
            const password = req.body.password
            console.log(name)
            console.log(password)
            console.log("хуййй")
            const candidate = await user_model.findOne({where:{user_name: name}})
            if (candidate)
            {
                return res.status(400).json({message:'Такой юзер уже есть'})
            }
            console.log(name)
            console.log(password)
            const new_user = new user_model
            ({
                user_name: name,
                user_password: password
            })
            await new_user.save()
            return res.status(200).json({message:'уююююююююююют'})
            payload = ""
            const accessToken = jwt.sign(payload, process.env.jwt_access_secret, {expiresIn:'1m'})
            const refreshToken = jwt.sign(payload, process.env.jwt_refresh_secret, {expiresIn:'2m'})
            userId = ""
            const tokenData = await token_model.findOne({where:{userUserId:userId}})
            if(tokenData){
                tokenData.refreshToken = refreshToken
                tokenData.save()
            }
            const token = await token_model.create({userUserId:userId, refreshToken})

        }catch (e){
            return res.status(500).message("ошибочкаааааа")
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