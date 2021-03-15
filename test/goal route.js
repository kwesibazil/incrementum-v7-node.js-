const {body, check, validationResult} = require('express-validator');
const express = require('express')
const router  = express.Router()
const GoalController = require('../controllers/GoalController')


router.post('/demo', [check('title').trim().escape() ] , GoalController.test)



// router.post('/show', GoalController.show)
// router.post('/store', GoalController.store)
// router.post('/update', GoalController.update)


module.exports = router;