import React, { Component } from "react";
// eslint-disable-next-line
// import slick from "slick-carousel";
import SlickCarousel from "react-slick";
// import $ from "jquery";

const slickOpts = {
  dots: true,
  infinite: false,
  autoplay: false,
  arrows: false,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

class Slick extends Component {
  /*constructor(props) {
    super(props);
    this.opts = props.opts ? props.opts : slickOpts;
    this.slickCarousel = React.createRef();
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.opts !== nextProps.opts && !this.props.lazyRef) {
      $(this.slickCarousel.current).slick("unslick");
      $(this.slickCarousel.current).slick(nextProps.opts);
    }
    return true;
  }
  componentDidMount() {
    $(this.slickCarousel.current).slick(this.opts);
  }*/
  render() {
    const attr = {
      ...slickOpts,
      ...this.props.attr
    };
    return (
      <div style={{ width: "100%" }}>
        <SlickCarousel {...attr}>{this.props.children}</SlickCarousel>
      </div>
    );
  }
}

export default Slick;
