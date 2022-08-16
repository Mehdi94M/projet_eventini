const User = require("../models/User")


exports.updateUserProfile=async(req,res)=>{
    try {
       await User.findByIdAndUpdate(req.user.id,{$set:{imageUrl:req.file.filename}})
        res.status(200).send('image uploaded')
        
    } catch (error) {
        res.status(500).send('server error')
    }
}