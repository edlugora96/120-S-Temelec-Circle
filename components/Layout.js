import React from "react";
import { initGA, logPageView } from "$utils/analytics";
import CSSTransition from "react-addons-css-transition-group";
import { withRouter } from "next/router";
import connect from "$redux/connect";

import Loading from "$react/Loading";
import "$styles/animations.css";

class Layout extends React.Component {
  componentDidMount() {
    if (typeof window !== "undefined" && !window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    const Choose = {
      Loading:
        this.props.pages.status === 1
          ? () => <Loading {...this.props} />
          : () => <div style={{ position: "absolute", zIndex: "-1" }} />
    };
    return (
      <React.Fragment>
        {/*<Navbar {...this.props} />*/}
        {/*<HeaderGlobal {...this.props} />*/}
        <CSSTransition
          transitionName="fade"
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeave={true}
          transitionLeaveTimeout={500}
          // transitionLeaveTimeout={1000}
        >
          {this.props.pages.status === 1 && (
            <Choose.Loading key={this.props.pages.status} />
          )}
        </CSSTransition>
        {this.props.children}
        {/*<Footer {...this.props} />*/}
      </React.Fragment>
    );
  }
}

export default connect(withRouter(Layout));
