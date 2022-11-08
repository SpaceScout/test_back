const token_model = require('../models/token.model')
const jwt = require('jsonwebtoken')

class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.jwt_access_secret, {expiresIn:'1m'})
        const refreshToken = jwt.sign(payload, process.env.jwt_refresh_secret, {expiresIn:'2m'})
        return{
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken){
        const tokenData = await token_model.findOne({where:{userUserId:userId}})
        if(tokenData){
            tokenData.refreshToken = refreshToken
            tokenData.save()
        }
        const token = await token_model.create({userUserId:userId, refreshToken})
        return token
    }
}

module.exports = new TokenService