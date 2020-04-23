import React from "react";

const Loading = (props) => {
  React.useEffect(() => {
    props.loadImage({
      url:
        "https://propertysonoma.com/media/logow-ddb9627d7439acdf7dd44996c1134ee6.png",
      name: "loadingImage",
    });
  }, []);
  return (
    <section>
      <img
        src="https://propertysonoma.com/media/logow-ddb9627d7439acdf7dd44996c1134ee6.png"
        alt="KP Loadding..."
      />
    </section>
  );
};

export default Loading;
