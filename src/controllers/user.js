require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const auth = require("./middleware/auth");
const path = require('path'); 
const bodyParser = require('body-parser');
const cloudinary = require("../../utils/cloudinary");

// importing user context
const User = require("../models/user");

const usersController = { 
    register: async (req, res) => {
        // register logic
        try{
            // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
            const { first_name, last_name, business_name, phone_number, address, email, password } = req.body;
            if (!(email && password && first_name && last_name && phone_number && business_name)) {
                return res.status(400).send("All input is required");
        }
    
        const oldUser = await User.findOne({ email });
    
        if (oldUser){
            return res.status(409).send("User already exist. Please Login")
        }
        //encrypted password
        const encryptedPassword = await bcrypt.hashSync(password, 10);
    
        //create User in our database
        const user = await User.create({
            first_name,
            last_name,
            business_name,
            phone_number,
            address,
            logo: result.secure_url,
            email: email.toLowerCase(), //convert email to lowercase
            password: encryptedPassword
        });
    
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;
    
        // return new user
        res.status(201).json(user);
      } catch (err) {
        console.log(err);
      }
    },

    login: async(req, res) => {
        // our login logic goes here
        try{
            //Get user input
            const {email, password} = req.body
            //validate input
            if(!(email && password )) {
                return res.status(400).send("All input required")
            }
            //validate if user exists in database
            const user = await User.findOne({email});
    
            if(user && (await bcrypt.compareSync(password, user.password))) {
                //create token
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                // save user token
                user.token = token;
    
                //user
                return res.status(200).json(user);
            }
            res.status(400).send("Invalid credentials");
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = usersController