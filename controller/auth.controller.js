const User = require('../models/user.model')
const Role = require('../models/role.model')

class AuthController{
    async registration(req, res)
    {
        try {
            const name = req.body.name
            const password = req.body.password
            const candidate = await User.findOne({name})
            if (candidate)
            {
                return res.status(400).json({message:'Такой юзер уже есть'})
            }
            console.log(name)
            console.log(password)
            const new_user = new User
            ({
                user_name: name,
                user_password: password
            })
            await new_user.save()
            return res.status(200).json({message:'уююююююююююют'})
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