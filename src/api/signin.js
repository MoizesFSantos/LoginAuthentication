const express = require("express");
const { route } = require(".");
const Users = require("../models/users");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post('/signin', async (req, res) =>{
    const {email, password} = req.body;
    const userWithEmail = await Users.findOne({where:{email}}).catch((error) =>{
        console.log(`Error: ${error}`)
    });
    if(!userWithEmail){
        return res.status(400).json({ message: "Email or Password does not match"})
    };
    if(userWithEmail.password !== password){
        return res.status(400).json({ message: "Email or Password does not match"})
    }
    const jwtToken = jwt.sign({id: userWithEmail.id, email: userWithEmail.email}, process.env.JWT_SECRET);

    res.json({ message: 'Welcome back!', token: jwtToken});
})

module.exports = router;