const Habit=require('../models/habit');

module.exports.habits= async function(req,res){

    try
    {
        let habits = await Habit.find({});
            console.log(habits);
            
            return res.render('./user_trackHabit',
            {
                title:'My Habits',
                habit_list:habits
            });
    }
    catch(err)
    {
        console.log('error in fetching habit from db');
        return;
    }
}