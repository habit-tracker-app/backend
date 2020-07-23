const express=require('express');
const app=express();
const port=80;
const expressLatouts=require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLatouts);

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

//use express router
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
}); 