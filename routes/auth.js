const express = require('express')
const router = express.Router()
const {register, login} = require('../controllers/auth')
const userValidation = require('../middleware/userValidation')

router.route('/register')
    .post(userValidation, register)
router.route('/login')
    .post(login)

module.exports = router