const certificate = require('../models/cetrificate.model')
const {Op} = require("sequelize");
const admin_model = require('../models/admin.model')
const toker_service = require('../services/token.service')

class adminController {
    async new_certificate(req, res)
    {
        try {
            const certificate_code = req.body.certificate_code
            const certificate_mb = await certificate.findOne({where:{certificate_id: certificate_code}})
            if (certificate_mb) {
                const allCetrificateLikeIts = await certificate.findAndCountAll({where:{certificate_id: {[Op.like]:`%${certificate_code}%`}}})
                console.log(allCetrificateLikeIts.count)
                const countPlusOnew = allCetrificateLikeIts.count + 1
                const newCetrificate = certificate_code + countPlusOnew
                const cert = new certificate(
                     {certificate_id: newCetrificate}
                )
                await cert.save()
                return res.json({message:'Такой сертификат уже есть. Новый сертификат записан с цифрой ' + countPlusOnew + ' на конце'})
            }
            const cert = new certificate(
                {certificate_id: certificate_code})
            await cert.save()
            return res.json({message:'Сертификат записан!'})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка в регистрации сертификата'})
        }
    }

    async login(name, password){
        const user = await admin_model.findOne({name})
        if (!user) {
            throw BadRequest('Админ с таким именем не найден')
        }
        if (!password){
            throw BadRequest('Неверный пароль')
        }

        const userDto = new UserDto(user.user_name, user.user_id);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens}
    }
}


module.exports = new adminController()