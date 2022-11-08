const user_model = require('../models/user.model')
const tokenService = require('./token.service')
const UserDto = require('../dtos/user.dto')

class UserService{
    async registration(name, password){
        const candidate = await user_model.findOne({where:{user_name: name}})
            if (candidate){
                throw new Error('пользователь с таким иенем ужеб есть')
            }

            const new_user = new user_model({
                user_name: name,
                user_password: password
            })
            await new_user.save()

            const user = await user_model.findOne({where:{user_name: name}})
            const userDto = new UserDto(name, user.user_id)
            const tokens = tokenService.generateTokens(name)
            return tokens
    }
}

module.exports = new UserService