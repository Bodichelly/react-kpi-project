import {
  SWITCH_SEARCH_TYPE,
  SEARCH_BY_ADDRESS,
  SEARCH_BY_NAME,
  SEARCH_BY_NOTARY
} from './types'

const initialState = {
  searchType: SEARCH_BY_ADDRESS
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_SEARCH_TYPE:
      return {...state, searchType: action.payload}
    default: return state
  }
}