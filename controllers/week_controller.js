const Week=require('../models/week');
const Habit=require('../models/habit');

module.exports.weekView= async function(req,res){
    try{
        let habits = await Habit.find({});
            
            return res.render('./week_views',
            {
                title:'Week Views',
                habits:habits
            });
    }
    catch(err){
        console.log('error in fetching habit from db');
        return;
    }
}