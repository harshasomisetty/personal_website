import React from "react";
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Social from "../components/Social.js";
export default function Home({data}) {
  const {title, description} = data.site.siteMetadata;

  return (
    <Layout>
      <Header />

      <div>
        {/* <h1 className="text-sky-400">{title}</h1> */}
        <Social />
        <p>{description}</p>

        {/* <img alt="Cute dog" src={data.image.publicURL} /> */}
        <p>Math, CS, Stats Triple Major @ Rutgers '23</p>
        <p>Building Skills for SWE, Quant Trading, Web3</p>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: {eq: "bro.jpg"}) {
      publicURL
    }
  }
`;
