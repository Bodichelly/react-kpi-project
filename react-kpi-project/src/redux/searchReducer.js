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
  data: [],
  searchType: SEARCH_BY_ADDRESS,
  departmentTypes: [SEARCH_PRIVATE_NOTATY, SEARCH_STATE_NOTARY_DEPARTMENT],
  searchUserType: SEARCH_REGISTRATOR,
  region: [
      {
        "id": 1,
        "name": "Вінницька обл",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 2,
        "name": "Житомирська обл",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 3,
        "name": "Київська обл",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      }
  ],
  area: [
    {
        "id": 1,
        "name": "Бородянський р.",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 2,
        "name": "Васильківський р.",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 3,
        "name": "Згурівський р.",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 4,
        "name": "Ставищенський р.",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 5,
        "name": "Таращанський р.",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 6,
        "name": "Тетіївський р.",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      }
  ],
  settlement: [
    {
        "id": 3,
        "name": "м. Бузова",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 1,
        "name": "м. Горбовичі",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 2,
        "name": "м. Гурівщина",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 4,
        "name": "м. Забір'я",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      }
  ],
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
