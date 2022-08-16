import React, { useRef, useState } from "react";
import { Card, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addEvent } from "../redux/actions/eventAction";
// import axios from "axios";

function AddEvent({ user }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const [event, setEvent] = useState({
    name: "",
    place: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  // //Add Image
  // const editImage = async () => {
  //   const config = {
  //     headers: {
  //       authorization: localStorage.getItem("token"),
  //     },
  //   };
  //   const data = new FormData();
  //   data.append("eventImage", file);
  //   try {
  //     await axios.put(`/api/event/uploadimageEvent/${event._id}`, data, config);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Evnment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Card.Img
            variant="top"
            src={
              event.imageUrl
                ? `upload/${event.imageUrl}`
                : "https://les-seminaires.eu/wp-content/uploads/2019/04/organisation-evenement-grand-public-735x400.jpg"
            }
            style={{ height: "250px" }}
          />
          <Card.Img variant="top" /> */}
          <h5>name event</h5>
          <FormControl type="text" name="name" onChange={handleChange} />
          <h5>place event</h5>
          <FormControl type="text" name="place" onChange={handleChange} />
          <h5>description</h5>
          <FormControl type="text" name="description" onChange={handleChange} />
          <h5>date event</h5>
          <FormControl type="text" name="date" onChange={handleChange} />
          <Modal.Body>by {user.name}</Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          {/* <div>
            <button
              className="btn btn-primary"
              onClick={() => inputRef.current.click()}
            >
              upload Image
            </button>
            <input
              type="file"
              ref={inputRef}
              hidden
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="btn btn-outline-primary" onClick={editImage}>
              edit
            </button>
          </div> */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                addEvent({
                  name_event: event.name,
                  description: event.description,
                  place: event.place,
                  date: event.date,
                })
              );
              handleClose();
            }}
          >
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEvent;
