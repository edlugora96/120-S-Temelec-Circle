import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  section: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgrounColor: "#000"
  }
}));

const Loading = props => {
  const classes = useStyles();
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
