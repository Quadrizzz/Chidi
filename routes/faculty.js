const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty')


router.post('/', async(req, res)=>{
    const {name, departments} = req.body;
    try{
        const newFaculty = new Faculty({
            name,
            departments
        })
        await newFaculty.save();
        res.json({message: 'New Faculty Created'});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

router.get('/all', async(req, res)=>{
    try{
        const faculties = await Faculty.find();
        res.json(faculties)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
module.exports = router;