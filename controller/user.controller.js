const db = require('../db')
class UserController{
    async save_user(req, res)
    {
        const user = req.body
        console.log(user)
        const new_user = await db.query('INSERT INTO person (name) values ($1) RETURNING *', [user])
        res.json(new_user.rows)
    }
    async get_one_user(req, res)
    {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows)
    }
    async del_user(req, res)
    {
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows)
    }
}

module.exports = new UserController()