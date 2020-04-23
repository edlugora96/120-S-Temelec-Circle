import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Home = (props) => {
  return (
    <React.Fragment>
      <NextSeo
        title="Home | 120 S Temelec Circle, Sonoma"
        description="120 S Temelec Circle, Sonoma Home view"
      />
      <Link href="/gallery">
        <a>Gallery</a>
      </Link>
      <h1>Hello world</h1>
    </React.Fragment>
  );
};

export default Home;
