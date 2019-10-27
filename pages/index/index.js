import React from "react";
import IndexView from "./indexView";
import Layout from "$react/Layout";
import connect from "$redux/connect";
import { withRouter } from "next/router";
class Index extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <IndexView {...this.props} />
      </Layout>
    );
  }
}

export default connect(withRouter(Index));
