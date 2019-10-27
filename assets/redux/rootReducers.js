import { combineReducers } from "redux-starter-kit";
import * as users from "./users";

const rootReducers = combineReducers({
  users: users.usersSlice.reducer
});

export default rootReducers;
