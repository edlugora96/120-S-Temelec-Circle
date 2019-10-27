import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "$redux/store";
import { withRouter } from "next/router";
import dynamic from "next/dynamic";
import CssBaseline from "@material-ui/core/CssBaseline";

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <CssBaseline />
        <Component {...pageProps} {...store.getState()} />
      </Provider>
    );
  }
}

export default withRedux(initStore)(withRouter(MyApp));
