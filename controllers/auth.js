const User = require('../models/auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const {username, email, password} = req.body

        const data = {
            username,
            email,
            password : await bcrypt.hash(password, 10)
        }
        const newUser = await User.create(data)

        const token = jwt.sign({username, email}, "secret", {expiresIn : "1d"})

        const welcome = jwt.verify(token, "secret").username.toUpperCase()

        return res.status(201).json({welcome, newUser, token})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error : error.message})
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body
        if (!email || !password) {
            return res.status(400).json({msg : `Please provide all the required parameters!`})
        }

        const user = await User.findOne({where : {email}})

        if (!user) {
            return res.status(400).json({msg : `Email does not exist!`})   
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) {
            return res.status(400).json({msg : `Password Mismatch!`})
        }

        const token = jwt.sign({email}, 'secret', {expiresIn : '1d'})
        
        return res.status(200).json({user, token})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error : error.message})
    }
}