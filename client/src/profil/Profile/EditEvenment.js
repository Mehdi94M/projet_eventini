import React, { useRef, useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

import { updateEvent } from "../../redux/actions/eventAction";
import axios from "axios";

function EditEvenment({ event }) {
  const [show, setShow] = useState(false);
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [changeEvent, setChangeEvent] = useState({
    name: event.name_event,
    description: event.description,
    date: event.date,
    place: event.place,
  });
  const handleChange = (e) => {
    setChangeEvent({ ...changeEvent, [e.target.name]: e.target.value });
  };

  const editImage = async () => {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const data = new FormData();
    data.append("eventImage", file);
    try {
      await axios.put(`/api/event/uploadimageEvent/${event._id}`, data, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Evenment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Change name </h5>
          <FormControl
            type="text"
            name="name"
            value={changeEvent.name}
            onChange={handleChange}
          />
          <br />
          <h5>Change place </h5>
          <FormControl
            type="text"
            name="place"
            value={changeEvent.place}
            onChange={handleChange}
          />
          <br />
          <h5>Change date </h5>
          <FormControl
            name="date"
            value={changeEvent.date}
            onChange={handleChange}
          />
          <br />
          <h5>Change description </h5>
          <FormControl
            name="description"
            value={changeEvent.description}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <div>
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
          </div>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                updateEvent(event._id, {
                  name_event: changeEvent.name,
                  description: changeEvent.description,
                  place: changeEvent.place,
                  date: changeEvent.date,
                })
              );
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEvenment;
