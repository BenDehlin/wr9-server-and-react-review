import { createStore, combineReducers } from "redux"
import bookReducer from "./bookReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
  bookReducer,
  authReducer,
})

export default createStore(rootReducer)
