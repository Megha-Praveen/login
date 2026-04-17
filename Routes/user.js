const express = require("express");
const user = express.Router();

// Predefined Users
const username="Admin";
const email="admin@gmail.com";
const password="Admin@135";

user.get('/',(req,res)=>{

    if(req.session.user){
        res.redirect('/home');
    }
    else
    {
        res.render('login');
    }

    
})

user.post('/verify',(req,res)=>{
    
    console.log(req.body);

    if((req.body.username === username || req.body.username === email) && req.body.password === password ){
        req.session.user = req.body.username;
        res.redirect('/home');
    }
    else{
        res.render('login',{msg:"Invalid Credentials"});
    }

})

user.get('/home',(req,res)=>{
    if(req.session.user){
        res.render('home',{username: req.session.user});
    }
    else
    {
        res.redirect('/');
    }
})

user.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/?msg:"Logged Out');
    });
})

module.exports=user;