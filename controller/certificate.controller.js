const certificate = require('../models/models.js')
class CertificateController {
    async save_certificate(req, res)
    {
        try {
            const certificate_code = req.body
            const certificate_mb = await certificate.findOne({certificate_code})
            if (certificate_mb) {
                return res.status(400).json({message: 'такой сертификат уже есть'})
            }
            const cert = new certificate({certificate_code})
            await cert.save()
            return res.json({message:'сертификат записан'})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'ошибка в регистрации сертификата'})
        }
    }
}

module.exports = new CertificateController()