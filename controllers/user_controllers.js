const Habit=require('../models/habit');

module.exports.createSession= async function(req,res){

    try{
       let habit = await Habit.findOne({title:req.body.title});
        if(!habit){
            try{
                console.log(req.body);
               let habits=await  Habit.create({
                    title: req.body.title,
                    details: req.body.details,
                    time: req.body.time
                });
                return res.redirect('/users/tracks-habits');
            }catch(err){
                if(err){console.log('error in Creating data while enter'); 
                 return;
                }
            }
           
        }
        else{
            return res.redirect('back');
        }
      
    }catch(err){
        console.log('error in finding habit in enter data');
        return;
    }

    
}