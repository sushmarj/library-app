const express= require('express');
const router =express.Router();
const Return= require('../models/return.model');
const validate=require('../models/return.model');


router.get('/', (req, res)=>{
    Return.find((err, result)=>{
        if(err) res.status(404).send(err)
        else res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    Return.findById({_id:req.params.id},(err, result)=>{
        if(err) res.status(404).send(err)
        else res.status(200).send(result);
    })
})
router.post('/',async(req,res)=>{
    const { error} = validate(req.body)
    if(error) 
       return res.status(400).send(error.details[0].message);
        let newTask=new Return({
        Nameofbook:req.body.Nameofbook,
        Barcode:req.body.Barcode,
        DVDCD:req.body.DVDCD,
        Employeeid:req.body.Employeeid,
        ReturnDate:req.body.ReturnDate
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
router.delete('/:id',(req,res)=>{
    Return.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("employee is deleted")
   })
})

router.put('/:id',(req,res)=>{
            
    Return.findByIdAndUpdate({_id:req.params.id}, {$set:{
        Nameofbook:req.body.Nameofbook,
        Barcode:req.body.Barcode,
        DVDCD:req.body.DVDCD,
        Employeeid:req.body.Employeeid,
        ReturnDate:req.body.ReturnDate}},
        (err,result)=>{
            if(err)
            res.status(404).send(err);
         else
         res.status(200).send(result)
        })
}
)
module.exports=router
