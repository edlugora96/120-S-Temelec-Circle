import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  section: {
    position: "fixed",
    zIndex: "99999999",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    "& > img": {
      maxWidth: "100%",
      maxHeight: "100%"
    }
  }
}));

const Loading = props => {
  const classes = useStyles();
  React.useEffect(() => {
    props.loadImage({
      url:
        "https://propertysonoma.com/media/logow-ddb9627d7439acdf7dd44996c1134ee6.png",
      name: "loadingImage"
    });
  }, []);
  return (
    <section className={classes.section}>
      <img
        src="https://propertysonoma.com/media/logow-ddb9627d7439acdf7dd44996c1134ee6.png"
        alt="KP Loadding..."
      />
    </section>
  );
};

export default Loading;
