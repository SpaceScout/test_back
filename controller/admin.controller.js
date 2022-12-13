const AdminService = require('../services/admin.service')

class AdminController {
    async new_certificate(req, res)
    {
        try {
            const certificate_code = req.body.certificate_code
            const cert = await adminService.new_certificate(certificate_code)
            console.log(cert)
            return res.status(200).json(cert)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка в регистрации сертификата'})
        }
    }

    async login(req, res)
    {
        try{
            const {login, password} = req.body
            const admData = await AdminService.login(login, password);
            return res.json(admData);
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибк'})
        }
    }
}


module.exports = new AdminController()