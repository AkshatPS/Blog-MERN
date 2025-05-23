const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");

// UPDATE
router.put("/:id", async (req,res) => {
    if (req.body.userId === req.params.id){
        // update password
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            // Find the current user before updating
            const user = await User.findById(req.params.id);
            const oldUsername = user.username;

            // Update the user information
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body,
                },
                {new : true}
            );

            // If the username was updated, update the username in all posts
            if (req.body.username && req.body.username !== oldUsername) {
                await Post.updateMany(
                    { username: oldUsername }, // Find posts with the old username
                    { $set: { username: req.body.username } } // Set the new username
                );
            }

            res.status(200).json(updatedUser);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json("You can update only your account!");
    }
    
});

// DELETE
router.delete("/:id", async (req,res) => {
    if (req.body.userId === req.params.id){
        try {
            // find username to delete every posts under that user
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted.");
            }
            catch (err) {
                res.status(500).json(err);
            }
        }
        catch (err){
            res.status(404).json("User not found!");
        }
    }
    else {
        res.status(401).json("You can delete only your account!");
    } 
});

// GET USER
router.get("/:id", async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        // remove password from response
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }
    catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;