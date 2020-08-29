const mongoose =require("mongoose");
const Joi= require('joi');
const employeeSchema =mongoose.Schema({
    Nameofbook:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Edition:{
        type:Number,
        required:true
    },
    DVDCD:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Employeeid:{
        type:String,
        required:true
    },
    Employeename:{
        type:String,
        required:true
    },
    Employeeemail:{
        type:String,
        required:true
    },
    Phonenumber:{
        type:Number,
        required:true
    }

})
const Employee=module.exports=mongoose.model('Employee', employeeSchema);