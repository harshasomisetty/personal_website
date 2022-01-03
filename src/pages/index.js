import React from "react";
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Home({data}) {
  const {title, description} = data.site.siteMetadata;

  return (
    <Layout>
      <Header />

      <p className="text-xl">MINEEE</p>
      <div>
        <h1 className="text-sky-400">{title}</h1>
        <Link to="/blog">Read my blog</Link>
        <p>{description}</p>

        <img alt="Cute dog" src={data.image.publicURL} />
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
