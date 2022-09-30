const certificate = require('../models/models')

class CertificateController {
    async save_certificate(req, res)
    {
        try {
            const certificate_code = req.body.certificate_code
            const certificate_mb = await certificate.findOne({where:{certificate_id: certificate_code}})
            if (certificate_mb) {
                for (let i = 0; i <= 100; i++){
                    const certificate_code2 = certificate_code + i
                    console.log(certificate_code2)
                    const certificate_mb2 = await certificate.findOne({where:{certificate_id: certificate_code2}})
                    if (certificate_mb2) {
                        continue
                    }
                    else {
                        const cert = new certificate(
                            {certificate_id: certificate_code2}
                        )
                        await cert.save()
                        return res.json({message:'Такой сертификат уже есть. Новый сертификат записан с цифрой ' + i + ' на конце'})
                        return
                    }
                }
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
}

module.exports = new CertificateController()