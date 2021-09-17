import { combineReducers } from "redux";
// import authReducer from "./auth";
// import profileReducer from "./profile";
import authReducer from "./authReducer"

const rootReducers = combineReducers({
    auth: authReducer,
    // profile: profileReducer,
});

export default rootReducers;