import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  section: {
    display: "flex",
    maxWidth: 1200,
    height: "100vh",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    padding: "100px 20px"
  }
}));

const Home = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <NextSeo
        title="Home | 120 S Temelec Circle, Sonoma"
        description="120 S Temelec Circle, Sonoma Home view"
      />
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Hello world</h1>
    </React.Fragment>
  );
};

export default Home;
