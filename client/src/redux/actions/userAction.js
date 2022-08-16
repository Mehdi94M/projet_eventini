import axios from "axios";
import { GET_USER, GET_USERS } from "../types/type";
import { userCurrent } from "./authAction";

export const getUsers = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/user/allUser", config);
    dispatch({
      type: GET_USERS,
      payload: res.data.users,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/user/getOneUser/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data.user,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put("/api/user/updateUser", formData, config);
    dispatch(userCurrent());
  } catch (error) {
    console.log(error);
  }
};

export const updateAdminUser = (id, formData) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/user/updateAdminUser/${id}`, formData, config);
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsers = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/user/deleteUser/${id}`, config);
  } catch (error) {
    console.log(error);
  }
};
