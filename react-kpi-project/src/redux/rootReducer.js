import {combineReducers} from 'redux'
import {appReducer} from './appReducer'
import { searchReducer } from './searchReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  search: searchReducer
})