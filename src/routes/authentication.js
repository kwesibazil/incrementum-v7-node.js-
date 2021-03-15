const express = require('express')
const router = express.Router()

const AuthController = require('../modules/authentication/controller/AuthController')

router.post('/register', AuthController.validate , AuthController.register)
router.post('/login', AuthController.validate, AuthController.login)

module.exports  =  router


