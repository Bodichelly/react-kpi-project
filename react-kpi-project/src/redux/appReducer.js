import { HIDE_LOADER, SHOW_LOADER, CHANGE_USER_TYPE, COMMON, ADMINISTRATOR } from "./types";

const initialState = {
  currentPage: "",
  isLoading: false,
  currentUser: ADMINISTRATOR,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case CHANGE_USER_TYPE:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
