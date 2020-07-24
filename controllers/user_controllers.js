const Habit=require('../models/habit');

module.exports.createSession= async function(req,res){

    try{
        console.log(req.body);
        let habit = await Habit.create({
            title: req.body.title,
            details: req.body.details,
            time: req.body.time
        });
        return res.redirect('back');
    }catch(err){
        console.log('error in creating a habit');
        return;
    }

    
}