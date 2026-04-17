const express = require("express");
const app = express();
const hbs = require('hbs');
const session = require("express-session");
const nocache = require('nocache');
const userRoute = require('./Routes/user.js');

app.use(express.static('public'));
app.set('view engine','hbs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(session({
    secret:'nextlearn_secret_key',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 60
    }
}))

app.use(nocache());

app.use('/',userRoute);

app.listen(3003, ()=>console.log("Server running on port 3003"));