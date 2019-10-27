import { connect } from "react-redux";
import * as images from "./images";
import * as users from "./users";
import * as pages from "./pages";
import { initStore as store } from "./store";

const mapDispatch = {
  ...pages.pagesSlice.actions,
  ...images.imagesSlice.actions,
  ...users.usersSlice.actions
};
const mapStateToProps = state => state;

export default App => {
  return connect(
    mapStateToProps,
    mapDispatch
  )(App);
};
