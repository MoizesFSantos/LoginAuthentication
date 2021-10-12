const express = require("express");
const Users = require("../models/users");
const router = express.Router();



router.post('/signUp', async (req, res) => {
    // taking the value of request
    const { fullName, email, password } = req.body;
    // checking if already exist 
    const userExitst = await Users.findOne({ where: { email } }).catch((error) => {
        console.log("Error:", error)
    });

    if (userExitst) {
        res.json({ message: "The user with this email already exist" })
    };
    const user = new Users({ fullName, email, password });
    await user.save().catch((error) => {
        console.log("Error:", error);
        res.json({error: "cannot register user at the moment"})
    })

    res.json({ message: "signUp" })
})

module.exports = router;