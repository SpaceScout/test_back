const authService = require('../services/auth.service')
const tokenService = require('../services/token.service')

class AuthController{
    async registration(req, res, next)
    {
        try {
            const name = req.body.login
            const password = req.body.password
            const userData = await authService.registration(name, password)
            console.log(userData)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json(userData)
        }catch (e){
            next(e)
        }

    }

    async login(req, res, next){
        try {
            const {login, password} = req.body;
            const userData = await authService.login(login, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            console.log(userData)
            return res.json(userData);
        }catch (e){
            next(e)
        }
    }
}

module.exports = new AuthController()