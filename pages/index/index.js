import React from "react";
import IndexView from "../indexView";
import connect from "$redux/connect";
import { withRouter } from "next/router";
class Index extends React.Component {
  render() {
    return <IndexView {...this.props} />;
  }
}

export default connect(withRouter(Index));
