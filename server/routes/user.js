const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
/* const key = require("../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport"); */



router.post("/register", async (req, res) => {
    console.log(req.body)

    const {
        name,
        email,
        mobile,
        profile_img,
        password,
        confirm_password,
    } = req.body

    try {
        user = new userModel({
        name,
        email,
        mobile,
        profile_img,
        password,   
        })


        if (password === confirm_password) {
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)
            await user.save()
            res.send(user)
        } else {
            res.status(400).json({errors: "The passwords entered do not match"})
        }
        

    } catch (error) {
        res.status(500).send(error.message)
        process.exit(1)
    }

}) 

module.exports = router