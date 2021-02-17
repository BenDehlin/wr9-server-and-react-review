const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [result] = await db.auth.check_user_by_email(email)
        if(result){
            return res.status(409).send('That email is already registered')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [user] = await db.auth.register_user(email, hash)
        // delete user.password
        req.session.user = user
        return res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [user] = await db.auth.check_user_by_email(email)
        if(!user){
            return res.status(401).send('Email or password incorrect')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            return res.status(401).send('Email or password incorrect')
        }
        delete user.password
        req.session.user = user
        return res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req, res) => {
        if(!req.session.user){
            return res.status(401).send('User not found')
        }
        return res.status(200).send(req.session.user)
    }
}