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


module.exports.delete= async function(req,res){
    try{
        for(item of req.query.info){
            await Habit.findByIdAndDelete(item);
        }
        if(req.xhr){
            return res.status(200).json({
                message:'Deleted Successfully'
            });
        }
        return res.redirect('/users/tracks-habits');
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:'Internal Server Error',
        });
    }
}