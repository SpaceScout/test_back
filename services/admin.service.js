const certificate = require('../models/cetrificate.model')
const {Op} = require("sequelize");
const admin_model = require('../models/admin.model')
const toker_service = require('../services/token.service')
const UserDto = require('../dtos/user.dto')

class AdminService{
    async login(name, password){
        const adm = await admin_model.findOne({name})
        console.log(adm)
        if (!adm) {
            res.status(400).json({message: 'Ошибк в имени'})
        }
        if (!password){
            res.status(400).json({message: 'Ошибк в пароле'})
        }
        const userDto = new UserDto(login, "1");
        // const tokens = toker_service.generateTokens({...userDto});

        // console.log(tokens)
        // await toker_service.saveToken(userDto.id, tokens.refreshToken);
        return userDto
    }

    async new_certificate(certificate_code){
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
                return cert
            }
            const cert = new certificate(
                {certificate_id: certificate_code}
            )
            await cert.save()
            return cert
    }
}

module.export = new AdminService()