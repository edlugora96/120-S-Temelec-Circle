import { connect } from "react-redux";
import * as users from "./users";
import { initStore as store } from "./store";

const mapDispatch = {
  ...users.usersSlice.actions
};
const mapStateToProps = state => state;

export default App => {
  return connect(
    mapStateToProps,
    mapDispatch
  )(App);
};
