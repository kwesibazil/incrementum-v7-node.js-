const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { validationResult, check } = require('express-validator');


// Validation rules.
const validate = [
  check('email', 'not a valid email').isEmail().trim().escape().normalizeEmail(),
  check('password', 'Password Must Be at Least 8 Characters').isLength({ min: 8 }).trim().escape(),
  check('accountType', 'account not found').optional({nullable: true}).isIn(['admin', 'guest'])
];



const register = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) 
    return res.status(422).json({ errors: errors.array() });
  else{
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) =>{
      if(err)
        res.json({error: err})
    
      let user = new User ({
        email: req.body.email,
        password: hashedPassword,
        role: { 
          accountType: req.body.accountType
        }
      })
      
      user.save()
      .then(_ => res.json({msg: `successfully added`}))
      .catch(e => res.json({msg:`an error occurred ${e}`}))
    })
  }

}


const login = (req, res, next) => {
  const error = validationResult(req)

  if(!error.isEmpty())
    return res.status(422).json({errors: error.array()})

  else{
    User.findOne({email: req.body.email})
    .then(response => {
      if(response){
        bcrypt.compare(req.body.password, response.password, function(err, result) {
          if(err)
            res.json({err: err})
          
          if(result){
            let token = jwt.sign({email: response.email}, 'verySecretValue', {expiresIn: '1h'})
            res.json({
              msg: 'login successful',
              token
            })
          }else{
            res.json({msg: 'Password does not match'})
          }
        })
      }else{
          res.json({msg: 'no user found'})
      }
    })
  }
}


module.exports = {login, register, validate}


