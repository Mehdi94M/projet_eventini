import { REMOVEALERT, SETALERT } from "../types/type";

const initialState = [];

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETALERT:
      return [...state, payload];
    case REMOVEALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
export default alertReducer;
