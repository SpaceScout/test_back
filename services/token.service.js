const jwt = require('jsonwebtoken');
const token_model = require('../models/token.model');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, "123", {expiresIn: '15s'})
        const refreshToken = jwt.sign(payload, "1234", {expiresIn: '30s'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await token_model.findOne({userUserId: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await token_model.create({userUserId: userId, refreshToken})
        return token;
    }
}

module.exports = new TokenService()