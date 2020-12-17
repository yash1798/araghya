import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import reducer from "./mainReducer"

const initialState = {}

const middleware = []

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
