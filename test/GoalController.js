

const test = async(req, res, next) =>{

  const result = req.body.title
  res.json(result)

}



module.exports = {test}




// const Goal = require('../models/Goal')


// //show list of Goals
// const index = async (req, res, next) => {
//   try{
//     const response = await Goal.find(); 
//     res.json({response})
//   }catch(err){
//     res.json({msg: `error occurred ${err}`})
//   }
// }


// // show single goal
// const show = async(req, res, next) => {
//   try{
//     let goalID = req.body.goalID
//     const response = await Goal.findById(goalID);
//     res.json({response})
//   }catch(err){
//     res.json({msg: `error occurred: ${err}`})
//   }
  
// }

// //add new goal
// const store = async (req, res, next) => {
//   try{
//     let goal = new Goal ({
//       title: req.body.title,
//       desc: req.body.desc
//     })
//     const response = await goal.save()
//     res.json(response);
   
//   }catch(err){
//     res.json({msg: `An error occurred ${err}`})
//   }
// }

// //update a goal
// const update = async (req, res, next) =>{
//   const goalID = req.body.goalID
  
//   let updatedData = {
//     title: req.body.title,
//     desc: req.body.desc
//   }

//   Goal.findByIdAndUpdate(goalID, {$set: updatedData})
//   .then(_ => res.json({msg: `Employee successfully updated`}))
//   .catch( err => res.json({msg: `An error occurred ${err}`}))
// }


// module.exports = {
//   index, show, update
// }