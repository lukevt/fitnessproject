const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    profile_pic:{
        type: String

    },
    password:{
        type:String,
        required:true,    
    }
})

module.exports = user = mongoose.model('user', userSchema)
