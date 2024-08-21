const express = require('express');
const router = express.Router();
const Lecturer = require("../models/New");


router.post('/', async(req, res)=>{
    const newLecturer = new Lecturer(req.body);
    try{
        await newLecturer.save();
        res.json({message: 'New Lecturer Created'});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;