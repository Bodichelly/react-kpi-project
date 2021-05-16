import {
  SWITCH_SEARCH_TYPE,
  SEARCH_BY_ADDRESS,
  SEARCH_BY_NAME,
  SEARCH_BY_NOTARY,
  SEARCH_PRIVATE_NOTATY,
  SEARCH_STATE_NOTARY_DEPARTMENT,
  CHANGE_NOTARY_TYPE,
  SET_REGION,
  SET_AREA,
  SET_SETTLEMENT,
  UPDATE_SEARCH_DATA,
  CLEAR_SEARCH_DATA,
  SET_SEARCH_QUERY_DATA
} from "./types";

const initialState = {
  // data: [
  //   {
  //     firstName: "Антон",
  //     lastName: "Воробйов",
  //     middleName: "Олексійович",
  //     certificateNumber: "170",
  //     isPrivate: true,
  //     phoneNumbers: "+380592949243",
  //     regionId: 2,
  //     areaId: 1,
  //     localityId: 1,
  //     address: "вул. Центральна, 15",
  //     id: "143183517351375137"
  //   },
  //   {
  //     firstName: "Антон",
  //     lastName: "Воробйов",
  //     middleName: "Олексійович",
  //     certificateNumber: "170",
  //     isPrivate: true,
  //     phoneNumbers: "+380592949243",
  //     regionId: 2,
  //     areaId: 1,
  //     localityId: 1,
  //     address: "вул. Центральна, 15",
  //     id: "143183517351375137"
  //   },
  // ],
  data: [],
  searchType: SEARCH_BY_ADDRESS,
  departmentTypes: [SEARCH_PRIVATE_NOTATY, SEARCH_STATE_NOTARY_DEPARTMENT],
  region: [],
  area: [],
  settlement: [],
  searchQueryData: {}
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_SEARCH_TYPE:
      return { ...state, searchType: action.payload };
    case UPDATE_SEARCH_DATA:
      return { ...state, data: action.payload };
    case CHANGE_NOTARY_TYPE:
      return { ...state, departmentTypes: action.payload };
    case SET_REGION:
      return { ...state, region: action.payload };
    case SET_AREA:
      return { ...state, area: action.payload };
    case SET_SETTLEMENT:
      return { ...state, settlement: action.payload };
    case CLEAR_SEARCH_DATA:
      return { ...state, data: []};
    case SET_SEARCH_QUERY_DATA:
      return { ...state, searchQueryData: action.payload }
    default:
      return state;
  }
};
