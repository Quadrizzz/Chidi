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

module.exports = router;