const mongoose =require("mongoose");

const ReturnSchema =mongoose.Schema({
    Nameofbook:{
        type:String,
        required:true
    },
    Barcode:{
        type:Number,
        required:true
    },
    DVDCD:{
        type:String,
        required:true
    },
    Employeeid:{
        type:Number,
        required:true
    },
    ReturnDate:{
        type:String,
        required:true
    }
   

})
const Return= module.exports= mongoose.model('Return', ReturnSchema);