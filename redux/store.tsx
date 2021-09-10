import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

const RootReducer= combineReducers({Reducer})

const store= createStore(RootReducer, applyMiddleware(thunk));

export default store