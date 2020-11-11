const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

router.post('/', async (req,res)=>{
    const {
        name,
        email,
        profile_pic,
        password
    } = req.body

    try {
        let user = await userModel.findOne({email})
        if(user){
            return res.status(400).json({
                erros: {
                    msg: "User already exists"
                }
            });
        }
         user = new userModel({
            name,
            email,
            profile_pic,
            password
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()

            res.send(user)
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
    
})

module.exports = router;