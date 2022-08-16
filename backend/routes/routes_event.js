const express = require("express");
const upload = require("../middlewares/upload");
const {
  register_event,
  updateEvent,
  getAllEvent,
  getOneEvent,
  deleteEvent,
  getUserEvent,
} = require("../controllers/eventController");
const {updateEvenmentProfile} = require("../controllers/eventUpdateImage");
const isAuth = require("../middlewares/isAuth");


const router = express.Router();

// register
// method post
// req.body
router.post("/registerEvent", isAuth, upload.single('eventImage') , register_event);

// updateEvent
// method put
// req.body
router.put("/updateEvent/:id", isAuth, updateEvent);

//Delete evenment
// method delete
// req.params
router.delete("/deleteEvenment/:id", isAuth, deleteEvent);
//get all evenment
// method get
router.get("/allEvenment", getAllEvent);
//get one contact
// method get
// req.params
router.get("/getOneEvent/:id", getOneEvent);
// change event image
router.put('/uploadimageEvent/:id',isAuth ,upload.single('eventImage'),updateEvenmentProfile)
//get user event
router.get('/getUserEvent',isAuth,getUserEvent)
module.exports = router;
