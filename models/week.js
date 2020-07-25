const mongoose = require('mongoose');

const weekSchema=new mongoose.Schema({
    week:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    habit:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Habit'
    }

},{
    timestamps:true
});

const week=mongoose.model('Week',weekSchema);
module.exports=week;