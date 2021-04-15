const express = require('express')
const User = require('../modal/userModal')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userRoute = express.Router()
userRoute.post('/register', (req, res) => {
    const hashedPasword = bcrypt.hashSync(req.body.password, 10)
    const newUser = User({ username: req.body.username, password: hashedPasword })
    newUser.save((err) => {
        if (err)
            return res.json({ message: 'Username already exist' })
    })
})
userRoute.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) throw err
        if (!user)
            return res.json({ message: 'worng username/password' })
        if (!bcrypt.compareSync(req.body.password, user.password))
            return res.json({ message: 'worng username/password' })
        const token = jwt.sign({ userId: user._id }, 'NULL')
        return res.json({ message: 'login successful', token: token })
    })
})
module.exports = userRoute