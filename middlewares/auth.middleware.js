const ApiError = require('../middlewares/error.mddleware')
const tokenService = require('../services/token.service')

module.exports = function(req, res, next) {
    try{
        const authorizationHeader = req.headers.token
        if(!authorizationHeader) {
            return next(ApiError.UnauthorizedError()) 
        }

        const accessToken = authorizationHeader.split('')[1]
        if(!accessToken) {
            return next(ApiError.UnauthorizedError()) 
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if(!userData){
            return next(ApiError.UnauthorizedError())
        }

        req.login = userData
        next();
    } catch(e){
        return next(ApiError.UnauthorizedError())
    }
}