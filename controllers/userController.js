const asyncHandler = require("express-async-handler");
const express = require('express');
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
const User = require("../models/userModel");



exports.registerUser = async (req,res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(201).json({
            status:'success',
        });
    }   
    catch(err){
        console.log(err);
    }
};


