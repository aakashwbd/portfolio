import { ActionTypes } from "../constants/action-type";
// import * as types from "./../types";

const initialState = {
    token: null,
    isAuthenticate: false,
    currentUser: null,

    message: {
        show: false,
        type: "",
        text: "",
    },
   
    // registered: false,
    busyBox: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser,
            };
        case ActionTypes.SET_USER:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser,
            };
        case ActionTypes.REGISTER:
            return {
                ...state,
                registered: action.payload,
            };
        // case types.RESET_REGISTER:
        //     return {
        //         ...state,
        //         registered: action.payload,
        //     };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticate: false,
                currentUser: null,
            };
        // case types.FETCH_BLOOD_GROUPS:
        //     return {
        //         ...state,
        //         blood_groups: action.payload,
        //     };
        // case types.TOGGLE_BUSY_BOX:
        //     return {
        //         ...state,
        //         busyBox: action.payload,
        //     };
        default:
            return state;
    }
};

export default authReducer;
