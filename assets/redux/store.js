import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import rootReducers from "./rootReducers";
import { getToken } from "$utils/authenticator";
const initStoreSSR = {
  users: {
    status: 0,
    token: "",
    message: []
  }
};
export const initStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducers,
    preloadedState: { ...preloadedState, ...initStoreSSR },
    middleware: [...getDefaultMiddleware()]
  });
};
