import {
  SWITCH_SEARCH_TYPE,
  SEARCH_BY_ADDRESS,
  SEARCH_BY_NAME,
  SEARCH_BY_NOTARY,
  SEARCH_PRIVATE_NOTATY,
  SEARCH_STATE_NOTARY_DEPARTMENT,
  CHANGE_NOTARY_TYPE,
  SEARCH_ADMINISTRATOR,
  SEARCH_REGISTRATOR,
  CHANGE_USER_SEARCH_TYPE,
  SET_REGION,
  SET_AREA,
  SET_SETTLEMENT,
  UPDATE_SEARCH_DATA
} from "./types";

const initialState = {
  data: [
    {
      name: "name",
      details: "details",
    },
    {
      name: "name1",
      details: "details1",
    },
    {
      name: "name2",
      details: "details2",
    },
    {
      name: "name3",
      details: "details3",
    },
    {
      name: "name4",
      details: "details4",
    },
  ],
  searchType: SEARCH_BY_ADDRESS,
  departmentTypes: [SEARCH_PRIVATE_NOTATY, SEARCH_STATE_NOTARY_DEPARTMENT],
  searchUserType: SEARCH_REGISTRATOR,
  region: [],
  area: [],
  settlement: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_SEARCH_TYPE:
      return { ...state, searchType: action.payload };
    case UPDATE_SEARCH_DATA:
      return { ...state, data: action.payload };
    case CHANGE_NOTARY_TYPE:
      return { ...state, departmentTypes: action.payload };
    case CHANGE_USER_SEARCH_TYPE:
      return { ...state, searchUserType: action.payload };
    case SET_REGION:
      return { ...state, region: action.payload };
    case SET_AREA:
      return { ...state, area: action.payload };
    case SET_SETTLEMENT:
      return { ...state, settlement: action.payload };
    default:
      return state;
  }
};
