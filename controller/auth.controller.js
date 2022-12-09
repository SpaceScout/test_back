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
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json(userData)
        }catch (e){
            next(e)
        }

    }

    async login(req, res){
        try {
            const {name, password} = req.body;
            const userData = await userService.login(name, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        }catch (e){
            console.log('e')
        }
    }

    async getUsers(req, res)
    {
        try {
            res.json('sozdal vse')
        }catch (e){
            next(e)
        }
    }
}
module.exports = new AuthController()