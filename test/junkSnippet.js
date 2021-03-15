
// Validation rules.
// var loginValidate = [
//   check('email', 'custom message fix before production').isEmail(),
//   check('password').isLength({ min: 8 })
//   .withMessage('Password Must Be at Least 8 Characters')
//   .matches('[0-9]').withMessage('Password Must Contain a Number')
//   .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter')
// ];




// const errors = validationResult(req);
// 	if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
// 	}
// 	else {
//     // Insert Login Code Here
//     let username = req.body.username;
//     let password = req.body.password;
//     res.send(`Username: ${username} Password: ${password}`);
// 	}


// var SimSchema = new Schema({
//   msisdn     : { type : String , unique : true, required : true, dropDups: true },
//   imsi       : { type : String , unique : true, required : true, dropDups: true },
//   status     : { type : Boolean, default: true},
//   signal     : { type : Number },
//   probe_name : { type:  String , required : true }
// });