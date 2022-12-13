const ApiError = require('../middlewares/error.mddleware')
const tokenService = require('../services/token.service')

module.exports = function(req, res, next) {
    try{
        const authorizationHeader = req.headers.authorization
        if(!authorizationHeader) {
            console.log("1")
            return next(ApiError.UnauthorizedError()) 
        }

        const accessToken = authorizationHeader.split('')[1]
        if(!accessToken) {
            return next(ApiError.UnauthorizedError())
            console.log("2") 
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if(!userData){
            return next(ApiError.UnauthorizedError())
            console.log("3")
        }

        req.login = userData
        next();
    } catch(e){
        console.log("4")
        return next(ApiError.UnauthorizedError())
    }
}