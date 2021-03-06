import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";
import { getToken } from "$utils/authenticator";
export let store = {};

const initStoreSSR = {
  images: {},
  users: {
    status: 0,
    token: "",
    message: [],
  },
};

export const initStore = (preloadedState = {}) => {
  const get = configureStore({
    reducer: rootReducers,
    preloadedState: { ...preloadedState, ...initStoreSSR },
    middleware: [...getDefaultMiddleware()],
  });
  store = {
    get,
  };
  return get;
};
