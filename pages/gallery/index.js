import React from "react";
import GalleryView from "./GalleryView";
import connect from "$redux/connect";
import { withRouter } from "next/router";
import Layout from "$react/Layout";
class Gallery extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <GalleryView {...this.props} />
      </Layout>
    );
  }
}

export default connect(withRouter(Gallery));
