// import { toast } from "react-toastify";
import { ActionTypes } from "../constants/action-type";
// import { api_routes } from "../../constants/urls";
// import { formDataBuilder, jsonTypeHeaders } from "../../utils/helpers";
// import * as types from "../types";
const jsonTypeHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const TOKEN = localStorage.getItem("token");

// Mutations
// export const fetchBloodGroups = () => (dispatch) => {
//     fetch(api_routes.fetch_blood_groups, {
//         method: "GET",
//         headers: jsonTypeHeaders,
//     })
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res);
//             if (res.status === "done") {
//                 dispatch({
//                     type: types.FETCH_BLOOD_GROUPS,
//                     payload: res.blood_groups,
//                 });
//             }
//         })
//         .catch((err) => console.log(err));
// };

export const login =
  (data, cb = () => {}) =>
  (dispatch) => {
    // dispatch({ type: types.TOGGLE_BUSY_BOX, payload: true });

    fetch("http://127.0.0.1:8000/api/auth/login", {
      method: "POST",
      headers: jsonTypeHeaders,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // dispatch({ type: types.TOGGLE_BUSY_BOX, payload: false });
        if (res.status === "validate_error") {
          Object.keys(res.errors).forEach((key) => {
            // toast.error(key[0]);
          });
        } else if (res.status === "done") {
          // toast.success(res.message);
          localStorage.setItem("token", res.data.token);
          dispatch({
            type: ActionTypes.LOGIN,
            payload: {
              token: res.data.token,
              currentUser: res.data.user,
              isAuthenticate: true,
            },
          });
          cb();
        } else if (res.status === "error") {
          // toast.error(res.message);
        }
      })
      .catch((err) => console.log(err));
  };

export const register =
  (data, cb = () => {}) =>
  (dispatch) => {
    fetch("http://127.0.0.1:8000/api/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.status === "done") {
          console.log(res);
          cb();
          dispatch({ type: ActionTypes.REGISTER, payload: true });
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

export const logout = () => (dispatch) => {
  fetch("http://127.0.0.1:8000/api/auth/logout", {
    method: "POST",
    headers: {
      ...jsonTypeHeaders,
      Authorization: TOKEN,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.status === "done") {
        localStorage.removeItem("token");
        dispatch({ type: ActionTypes.LOGOUT });
      }
    })
    .catch((err) => console.log(err));
};

export const updateProfile =
  (data, cb = () => {}) =>
  (dispatch) => {
    console.log(data);
    fetch("http://127.0.0.1:8000/api/auth/update", {
      method: "PATCH",
      headers: {
        ...jsonTypeHeaders,
        Authorization: TOKEN,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === "done") {
          // localStorage.getItem("token");

          dispatch({
            type: ActionTypes.SET_USER,
            payload: {
              token: TOKEN,
              currentUser: res.data,
              isAuthenticate: true,
            },
          });

          cb();
        }
      })
      .catch((err) => console.log(err));
  };

export const fetchMe = () => (dispatch) => {
  fetch("http://127.0.0.1:8000/api/auth/me", {
    method: "GET",
    headers: {
      ...jsonTypeHeaders,
      Authorization: TOKEN,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.status === "done") {
        // dispatch({ type: types.TOGGLE_BUSY_BOX, payload: false });
        dispatch({
          type: ActionTypes.SET_USER,
          payload: {
            token: TOKEN,
            currentUser: res.data,
            isAuthenticate: true,
          },
        });
      }
    })
    .catch((err) => {
      console.log(err);
      // dispatch({ type: types.TOGGLE_BUSY_BOX, payload: false });
    });
};
