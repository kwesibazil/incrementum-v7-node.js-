const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema ({
  title: String,
  desc: String,
  milestones: [
    {
      title: String, 
      desc: String, 
      goal: String 
    }
  ]
}, { timestamps: true });

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;