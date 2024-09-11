const express = require('express');
const router = express.Router();
const Lecturer = require("../models/New");

router.get('/', async (req, res)=>{
    try{
        const lecturers = await Lecturer.find();
        res.json(lecturers);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

router.get('/:id', async (req, res)=>{
    try{    
        const lecturer = await Lecturer.findById(req.params.id);
        if(lecturer){
            res.json(lecturer)
        }
        else{
            res.status(400).json({message: "Lecturer not found"})
        }
    }
    catch(err){
        res.status(500).json({message: err})
    }
})

router.delete('/delete', async(req,res)=>{
    const id = req.body;
    try{
        const lecturer = await Lecturer.findById(id)
        if(lecturer){
            await lecturer.remove()
            res.json({message: "Lecturer Deleted"})
        }
        else{
            res.status(400).json({message: "Lecturer not found"})
        }
    }
    catch(err){
        res.status(500).json({message: err})
    }

})

router.post('/update/:id',  async(req, res)=>{
    try{
        const lecturer = await Lecturer.findById(req.params.id);
        if(lecturer){
            Object.keys(req.body).forEach((key) => {
                lecturer[key] = req.body[key];
            });
            const updatedLecturer =  lecturer.save()
            res.status(200).json(updatedLecturer)
        }
        else{
            res.status(400).json({message: "Lecturer not found"})
        }
    }
    catch(err){
        res.status(500).json({message: err});
    }
})

module.exports = router;