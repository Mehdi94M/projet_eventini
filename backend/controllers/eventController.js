const Evenment = require("../models/Evenment");

exports.register_event = async (req, res) => {
  let { name_event, place, description, date } = req.body;

  try {
    // check event exists
    const founEvent = await Evenment.findOne({ name_event });
    if (founEvent) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Evenment already exists" }] });
    }
    const evenment = new Evenment({
      name_event,
      place,
      description,
      date,
      user_id: req.user._id,
      
    });
    await evenment.save();
    res.status(201).send({ msg: "register with success", evenment });
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.updateEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Evenment.findById(id);

    if (req.user._id.toString() === event.user_id.toString()) {
      const evenment = await Evenment.findByIdAndUpdate(
        id,
        { $set: { ...req.body } },
        { new: true }
      );

      res.status(200).send({ msg: "Updated !", evenment });
    } else {
      res.status(401).send("You are not authorized..........");
    }
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Evenment.findById(id);
    if (
      req.user._id.toString() === event.user_id.toString() ||
      req.user.role === "admin"
    ) {
      await Evenment.findByIdAndDelete(id);
      res.status(200).send("evenment deleted...");
    } else {
      res.status(401).send("You are not authorized");
    }
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.getAllEvent = async (req, res) => {
  try {
    const evenments = await Evenment.find().populate("user_id",["name","tel"])
    res.status(200).send({ msg: "all evenments", evenments });
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.getOneEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const evenment = await Evenment.findById(id);
    res.status(200).send({ msg: "evenment finded", evenment });
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.getUserEvent = async (req, res) => {
  
  try {
    const evenments = await Evenment.find({user_id:req.user.id}).populate("user_id",["name"]);
    res.status(200).send({ msg: "evenment finded", evenments });
  } catch (error) {
    res.status(500).send("server error");
  }
}
