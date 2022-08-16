import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

import {
  deleteUsers,
  getUsers,
  updateAdminUser,
} from "../../redux/actions/userAction";
import { FaTrashAlt } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
function AllUsers({ users }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handelDelete = (id) => {
    if (window.confirm("are you sure")) {
      dispatch(deleteUsers(id));
      dispatch(getUsers());
    }
  };
  const [role, setRole] = useState("");

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        All Users
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {users.map((user) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "500px",
            }}
          >
            <Modal.Body>{user.name}</Modal.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "auto",
              }}
            >
              <Form.Select
                aria-label="Default select example"
                style={{ width: "150px" }}
                onChange={(e) => setRole(e.target.value)}
              >
                <option>{user.role}</option>
                <option value="user">user</option>
                <option value="admin">admin</option>
              </Form.Select>
              <div
                style={{ paddingTop: "10px", justifyContent: "space-around" }}
              >
                <h6>
                  <MdCreate
                    variant="primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(updateAdminUser(user._id, { role }));
                      handleClose();
                    }}
                  />
                </h6>
                <h6>
                  <FaTrashAlt
                    onClick={() => handelDelete(user._id)}
                    variant="danger"
                    style={{ cursor: "pointer" }}
                  />
                </h6>
              </div>
            </div>
          </div>
        ))}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button
            variant="primary"
            onClick={() => {
              dispatch(updateUser(users.user._id, { role }));
              handleClose();
            }}
          >
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AllUsers;
