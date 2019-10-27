import React from "react";
import IndexView from "../indexView";
import connect from "$redux/connect";
import Loading from "$react/Loading";
import { withRouter } from "next/router";
class Index extends React.Component {
  render() {
    return <Loading {...this.props} />;
  }
}

export default connect(withRouter(Index));
