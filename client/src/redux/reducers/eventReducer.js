import { GET_EVENTS, GET_USER_EVENT } from "../types/type";

const initialState = {
  evenments: [],
  evenment: null,
  userEvenment: [],
};

const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EVENTS:
      return { ...state, evenments: payload };
    case GET_USER_EVENT:
      return { ...state, userEvenment: payload };

    default:
      return state;
  }
};
export default eventReducer;
