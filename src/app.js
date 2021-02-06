const express=require('express');
const app=express();
const path=require('path');
console.log(__dirname);
const spath=path.join(__dirname,'../views');

app.set('view engine','hbs');
app.set('views',spath);
app.get('/',(req,res)=>{
    res.render("weather");

})



app.listen(3000,"127.0.0.1",()=>{
    console.log("Listening");
})