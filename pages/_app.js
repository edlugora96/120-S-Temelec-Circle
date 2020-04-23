import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import Router from "next/router";
import { withRouter } from "next/router";
import { initStore } from "$redux/store";
import Head from "next/head";

import { store } from "$redux/store";
import * as pages from "$redux/pages";

Router.events.on("routeChangeStart", (url) => {
  store.get.dispatch(pages.pagesSlice.actions.pageLoading());
});
Router.events.on("routeChangeComplete", () => {
  store.get.dispatch(pages.pagesSlice.actions.pageSucces());
});
Router.events.on("routeChangeError", () => {
  store.get.dispatch(pages.pagesSlice.actions.pageError());
});

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} {...store.getState()} />
      </Provider>
    );
  }
}

export default withRedux(initStore)(withRouter(MyApp));
