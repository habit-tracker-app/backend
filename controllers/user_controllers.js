const Habit=require('../models/habit');

module.exports.createSession=function(req,res){

    console.log(req.body);
    Habit.create({
        title: req.body.title,
        details: req.body.details,
        time: req.body.time
    },function(err,newHabit){

        if(err){
            console.log('error in creating a habit');
            return;
        }
        return res.redirect('back');
    });
}