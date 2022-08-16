import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../redux/actions/eventAction";
import { FaTrashAlt } from "react-icons/fa";
function AllEvents({ events }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handelDelete = (id) => {
    if (window.confirm("are you sure")) {
      dispatch(deleteEvent(id));
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        AllEvents
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div style={{ justifyContent: "space-around" }}>
          {events.map((event) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "500px",
              }}
            >
              {" "}
              <Modal.Body>{event.name_event}</Modal.Body>
              <h5>
                <FaTrashAlt
                  onClick={() => handelDelete(event._id)}
                  variant="danger"
                  style={{ cursor: "pointer" }}
                />{" "}
              </h5>
            </div>
          ))}
        </div>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AllEvents;
