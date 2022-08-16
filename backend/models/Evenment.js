const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name_event: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  imageUrl:String,
});
module.exports = mongoose.model("Evenment", eventSchema);
