import { createSlice } from "@reduxjs/toolkit";
import axios from "$utils/api";
import { login } from "$utils/authenticator";
import { getToken } from "$utils/authenticator";
const preUsersSlice = createSlice({
  initialState: {
    status: 0,
    token: "",
    message: "",
  },
  name: "users",
  reducers: {
    loginSucces: (state, action) => {
      return { ...state, status: 0, token: action.payload };
    },
    loginReset: (state, action) => {
      return { ...state, status: 0, data: {}, token: "", message: "" };
    },
    loginLoading: (state, action) => {
      return { ...state, status: 1 };
    },
    loginError: (state, action) => {
      return { ...state, status: 2, message: action.payload, token: "" };
    },
  },
});

const {
  loginSucces,
  loginReset,
  loginLoading,
  loginError,
  ...rest
} = preUsersSlice.actions;

const actions = {
  ...rest,
  login: (payload) => async (dispatch) => {
    dispatch(loginReset());
    try {
      dispatch(loginLoading());
      const res = await axios.post(`/`, payload);
      dispatch(loginSucces(res.data.token));
      return res.data;
    } catch (err) {
      dispatch(loginError(err.response.data));
      return err;
    }
  },
};

export const usersSlice = {
  reducer: preUsersSlice.reducer,
  actions,
};
