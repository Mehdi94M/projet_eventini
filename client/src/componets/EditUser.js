import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/userAction";

function EditUser({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updateUserr, setUpdateUserr] = useState({
    name: user.name,
    email: user.email,
    tel: user.tel,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUpdateUserr({ ...updateUserr, [e.target.name]: e.target.value });
  };
  //   const handleEdit = (e) => {
  //     e.preventDefault();
  //     dispatch(updateUser(user._id, updateUserr));
  //     handleClose();
  //   };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>change name</h5>
          <FormControl
            type="text"
            name="name"
            value={updateUserr.name}
            onChange={handleChange}
          />

          <br />
          <h5>change email</h5>
          <FormControl
            type="text"
            name="email"
            value={updateUserr.email}
            onChange={handleChange}
          />
          <br />
          <h5>change Telphone</h5>
          <FormControl
            type="text"
            name="tel"
            value={updateUserr.tel}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                updateUser({
                  name: updateUserr.name,
                  email: updateUserr.email,
                  tel: updateUserr.tel,
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

export default EditUser;
