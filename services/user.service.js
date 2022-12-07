const user_model = require('../models/user.model')
const tokenService = require('./token.service')
const UserDto = require('../dtos/user.dto')
const ApiError = require('../errors');

class UserService{
    async registration(name, password){
        const candidate = await user_model.findOne({where:{user_name: name}})
            if (candidate){
                throw ApiError.BadRequest('пользователь с таким именем уже есть')
            }

            const new_user = new user_model({
                user_name: name,
                user_password: password
            })
            await new_user.save()

            const user = await user_model.findOne({where:{user_name: name}})
            const userId = user.user_id 
            const userDto = new UserDto(name, userId)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            return {...tokens}
    }

    async login(name, password){
        const user = await user_model.findOne({name})
        if (!user) {
            throw BadRequest('Пользователь с таким именем не найден')
        }
        if (!password){
            throw BadRequest('неверный пароль')
        }

        const userDto = new UserDto(user.user_name, user.user_id);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens}
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken
    }
}

module.exports = new UserService