const Habit=require('../models/habit');

module.exports.habits=function(req,res){

    Habit.find({},function(err,habits){
        if(err){
            console.log('error in fetching contact from db');
            return;
        }
        return res.render('./user_trackHabit',{
            title:"My Habits",
            habit_list:habits
        });
    });
}