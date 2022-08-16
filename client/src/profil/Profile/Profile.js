import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import axios from "axios";
import { logout, userCurrent } from "../../redux/actions/authAction";
import "./Card.css";
import { deleteUsers, getUsers } from "../../redux/actions/userAction";
import EditUser from "../../componets/EditUser";
import AddEvent from "../../componets/AddEvent";
import { getEvents, getUserEvent } from "../../redux/actions/eventAction";
import CardUserEvent from "./CardUserEvent";
import AllEvents from "./AllEvents";
import AllUsers from "./AllUsers";
function Profile({ name }) {
  const [file, setFile] = useState(null);
  const user = useSelector((state) => state.authReducer.user);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const userevent = useSelector((state) => state.eventReducer.userEvenment);
  const events = useSelector((state) => state.eventReducer.evenments);
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserEvent());
  }, [dispatch]);

  const editProfile = async () => {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const data = new FormData();
    data.append("myImage", file);
    try {
      await axios.put("/api/user/uploadimage", data, config);
      dispatch(userCurrent());
    } catch (error) {
      console.log(error);
    }
  };
  const handelDelete = () => {
    if (window.confirm("are you sure")) {
      dispatch(deleteUsers(user._id));
      dispatch(logout());
    }
  };
  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={
                      user.imageUrl
                        ? `upload/${user.imageUrl}`
                        : "https://bootdey.com/img/Content/avatar/avatar7.png"
                    }
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    {/* user name */}
                    <h4>{user?.name}</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>
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
                    </div>
                    <button variant="danger" onClick={handelDelete}>
                      delet
                    </button>
                    <button
                      className="btn btn-outline-primary"
                      onClick={editProfile}
                    >
                      edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {/* user name  */}
                    {user?.name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {/* user Email  */}
                    {user?.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user?.tel}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Bay Area, San Francisco, CA
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <EditUser user={user} />
                    <AddEvent user={user} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landpage">
        {user.role === "admin" ? (
          <>
            <AllEvents events={events} />

            <AllUsers users={users} />
          </>
        ) : (
          <>
            <h5> My Event</h5>
            {userevent
              .filter((event) =>
                event.name_event
                  .toLowerCase()
                  .includes(name.toLowerCase().trim())
              )
              .map((evenment) => (
                <CardUserEvent evenment={evenment} />
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
