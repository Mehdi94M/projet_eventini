import { GET_EVENTS, GET_USER_EVENT } from "../types/type";
import { toast } from "react-toastify";
import axios from "axios";

export const addEvent = (data) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post("/api/event/registerEvent", data, config);
    toast.success(res.data.msg);
  } catch (error) {
    console.log(error);
  }
};

export const getEvents = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/event/allEvenment");
    dispatch({
      type: GET_EVENTS,
      payload: res.data.evenments,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteEvent = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/event/deleteEvenment/${id}`, config);
    dispatch(getEvents());
  } catch (error) {
    console.log(error);
  }
};
export const updateEvent = (id, formData) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    console.log(id);
    await axios.put(`/api/event/updateEvent/${id}`, formData, config);
    dispatch(getEvents());
  } catch (error) {
    console.log(error);
  }
};
export const getUserEvent = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(`/api/event/getUserEvent/`, config);
    dispatch({ type: GET_USER_EVENT, payload: res.data.evenments });
  } catch (error) {
    console.log(error);
  }
};
