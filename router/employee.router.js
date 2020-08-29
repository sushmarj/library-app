const express= require('express');
const router =express.Router();
const Employee= require('../models/employee.model');
const validate=require('../models/employee.model');


router.get('/', (req, res)=>{
    Employee.find((err, result)=>{
        if(err) res.status(404).send(err)
        else res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    Employee.findById({_id:req.params.id},(err, result)=>{
        if(err) res.status(404).send(err)
        else res.status(200).send(result);
    })
})
router.post('/',async(req,res)=>{
    const { error} = validate(req.body)
    if(error) 
       return res.status(400).send(error.details[0].message);
        let newTask=new Employee({
        Nameofbook:req.body.Nameofbook,
        Author:req.body.Author,
        Edition:req.body.Edition,
        DVDCD:req.body.DVDCD,
        Date:req.body.Date,
        Employeeid:req.body.Employeeid,
        Employeename:req.body.Employeename,
        Employeeemail:req.body.Employeeemail,
        Phonenumber:req.body.Phonenumber
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
router.delete('/:id',(req,res)=>{
    Employee.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("employee is deleted")
   })
})

router.put('/:id',(req,res)=>{
            
    Employee.findByIdAndUpdate({_id:req.params.id}, {$set:{
        Nameofbook:req.body.Nameofbook,
        Author:req.body.Author,
        Edition:req.body.Edition,
        DVDCD:req.body.DVDCD,
        Date:req.body.DVDCD,         
        Employeeid:req.body.Employeeid,
        Employeename:req.body.Employeename,
        Employeeemail:req.body.Employeeemail,
        Phonenumber:req.body.Phonenumber}},
        (err,result)=>{
            if(err)
            res.status(404).send(err);
         else
         res.status(200).send(result)
        })
}
)
module.exports=router
