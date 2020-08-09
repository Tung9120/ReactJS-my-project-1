import { combineReducers } from "redux";
import userReducer from "./userReducers";

const reducersAll = combineReducers({ user: userReducer });

export default reducersAll;
