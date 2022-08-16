const Evenment = require("../models/Evenment")



exports.updateEvenmentProfile=async(req,res)=>{
    try {
        
       await Evenment.findByIdAndUpdate(req.params.id,{$set:{imageUrl:req.file.filename}})
       
        res.status(200).send('image uploaded')
        
    } catch (error) {
        res.status(500).send('server error')
    }
}