const mongoose=require('mongoose');

// mongoose.connect('mongodb+srv://skayush731:Yaadnhhai731@cluster0.rcyls.mongodb.net/healthTracker?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect('mongodb://localhost/health_tracker', {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to mongoDB'));

db.once('open',function(){
    console.log('connected to the database');
});

module.exports=db;