const express= require('express');
const router =express.Router();
const validate=require('../models/books.model');
const Books= require('../models/books.model.js');

router.get('/', (req, res)=>{
    Books.find((err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    Books.findById({_id:req.params.id},(err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.delete('/:id',(req,res)=>{
    Books.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("book is deleted")
   })
})
router.post('/',async(req,res)=>{
    const { error} = validate(req.body)
    if(error) 
       return res.status(400).send(error.details[0].message);
        let newTask=new Books({
        shelfnumber:req.body.shelfnumber,
        Nameofbook:req.body.Nameofbook,
        Author:req.body.Author,
        Edition:req.body.Edition,
        DVDCD:req.body.DVDCD,
        Description:req.body.Description,
        Barcode:req.body.Barcode
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
  
router.put('/:id', (req, res)=>{
    Books.findOneAndUpdate({_id:req.params.id},{$set:{
        shelfnumber:req.body.shelfnumber,
        Nameofbook:req.body.Nameofbook,
        Author:req.body.Author,
        Edition:req.body.Edition,
        DVDCD:req.body.DVDCD,
        Description:req.body.Description,
        Barcode:req.body.Barcode

    }}, 
    (err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
module.exports=router
