const mongoose =require("mongoose");

const booksSchema =mongoose.Schema({
    shelfnumber:{
        type:String,
        required:true
    },
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
    Description:{
        type:String,
        required:true
    },
    Barcode:{
        type:Number,
        required:true
    }

})
const Books= module.exports= mongoose.model('Books', booksSchema);