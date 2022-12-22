const user_model = require('../models/user.model')
const tokenService = require('./token.service')
const UserDto = require('../dtos/user.dto')
const ApiError = require('../errors');
const bcrypt = require('bcrypt')

class UserService{
    async registration(login, password){
        const candidate = await user_model.findOne({where:{user_name: login}})
            if (candidate){
                throw ApiError.BadRequest('пользователь с таким именем уже есть')
            }

            const hashPassword = bcrypt.hashSync(password, 5)
            const new_user = new user_model({
                user_name: login,
                user_password: hashPassword
            })
            await new_user.save()

            const user = await user_model.findOne({where:{user_name: login}})
            const userId = user.user_id 
            const userDto = new UserDto(login, userId)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            return {...tokens}
    }

    async login(login, password){
        const user = await user_model.findOne({where:{user_name: login}})
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким именем не найден')
        }
        if (!password){
            throw ApiError.BadRequest('Пользователь с таким именем не найден')
        }

        const validPassword = bcrypt.compareSync(password, user.user_password)
        if(!validPassword){
            throw ApiError.BadRequest('Неправильный пароль')
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