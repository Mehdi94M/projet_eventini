const multer=require('multer')
const path=require('path')

const storag=multer.diskStorage(  {
     destination:'./client/public/upload',
   filename:function(req,file,cb){
    cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
   }

}
)
const upload=multer({
  storage:storag,
  fileFilter:function(req,file,cb){
    const fileType=/jpeg|jpg|png/ig
    const mimeType=fileType.test(file.mimetype)
  if(mimeType){
    cb(null,true)
  }else{
    cb(null,false)
  }
  }
})
module.exports=upload; 