import { combineReducers } from "@reduxjs/toolkit";
import * as pages from "./pages";
import * as images from "./images";
import * as users from "./users";

const rootReducers = combineReducers({
  pages: pages.pagesSlice.reducer,
  images: images.imagesSlice.reducer,
  users: users.usersSlice.reducer,
});

export default rootReducers;
