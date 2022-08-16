import { GET_USERS } from "../types/type";

const initialState = {
  users: [],
  loading: true,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
