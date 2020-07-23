const express=require('express');
const port=80;

const app=express();



//use express router
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
}); 