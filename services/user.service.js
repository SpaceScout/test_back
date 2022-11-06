const user_model = require('../models/user.model')
const token_service = require('../services/token.service') 
const UserDto = require('../dtos/user.dto');

class UserService {
    async registration(name, password) {
        const candidate = await user_model.findOne({where:{user_name: name}})
        console.log(candidate)
        if (candidate) {
            throw new Error(`Пользователь ${name} уже существует`)
        }

        const user = new user_model(
            {user_name: name, 
            user_password: password})
        await user.save()


        const user2 = await user_model.findOne({name})
        const userId = user2.user_id
        const userDto = new UserDto(name, userId);
        const tokens = token_service.generateTokens({...userDto});
        console.log(userDto.id)
        await token_service.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, userDto}
    }

}

module.exports = new UserService();