import {
  HIDE_LOADER, SHOW_LOADER, CHANGE_USER_TYPE, COMMON, ADMINISTRATOR, REGISTRATOR, LOGIN_USER,
  LOGOUT_USER,
  SET_USER_DATA
} from "./types";

const initialState = {
  currentPage: "",
  isLoading: false,
  currentUser: ADMINISTRATOR,
  email: "",
  username: ""
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case CHANGE_USER_TYPE:
      return { ...state, currentUser: action.payload };
    case LOGOUT_USER:
      return { ...state, currentUser: COMMON, email: "" , username: "" };
    case SET_USER_DATA:
      return { ...state, email: action.payload?.email, username: action.payload?.username };
    default:
      return state;
  }
};
