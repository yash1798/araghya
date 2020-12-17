import { combineReducers } from "redux"

import { postArrayReducer } from "./reducers/postArrayReducer"

const reducer = combineReducers({
	posts: postArrayReducer,
})

export default reducer
