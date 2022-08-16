const express = require("express");
const { updateUser, deleteUser, getAllUser, getOneUser, updateAdminUser } = require("../controllers/userController");
const { updateUserProfile } = require("../controllers/userUpdateImg");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/upload");

const router = express.Router();

// updateUser
// method put
// req.body
router.put("/updateUser", isAuth, updateUser);

// update admin / user
router.put("/updateAdminUser/:id", isAuth, updateAdminUser);


// change profile image
router.put('/uploadimage',isAuth ,upload.single('myImage'),updateUserProfile)

//Delete User
// method delete
// req.params
router.delete("/deleteUser/:id", isAuth, deleteUser);
//get all user
// method get
router.get("/allUser",isAuth,getAllUser);
//get one user
// method get
// req.params
router.get("/getOneUser/:id", getOneUser);


module.exports = router;
