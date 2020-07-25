const Habit=require('../models/habit');
const Week=require('../models/week');
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

module.exports.changeStatus= async function(req,res){

    try{
        let status=null;
        if(req.query.status!='null'){
            status=req.query.status;
        }
        let dateToFind = req.query.date;
        let statusToken = await Week.findOne({
            habit:req.query.id,
            date:dateToFind
        });
        if(statusToken){
            await statusToken.updateOne({week:status});
            statusToken.save();
        }
        else{
            let habit = await Habit.findById(req.query.id);
            if(habit){
                await Week.create({
                    week:status,
                    date:dateToFind,
                    habit:habit.id
                });
            }
        }
        if(req.xhr){
            return res.status(200).json({
                    message:'Habit Status Created',
                });
        }else{
            return res.redirect('back');
        }
        return res.redirect('back');
    }catch(err){
        console.log('Error in updating done Status',err);
        return;
    }
}
    


module.exports.delete= async function(req,res){
    try{
        for(item of req.query.info){
            await Habit.findByIdAndDelete(item);
            await Week.deleteMany({habit:item});
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