import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
// import Header from "../components/Header";
import Social from "../components/Social.js";
import {MDXRenderer} from "gatsby-plugin-mdx";
export default function Home({data}) {
  // const {title, description} = data.site.siteMetadata;
  const post = data.mdx;

  return (
    <Layout>
      <div className="m-3">
        <MDXRenderer>{post.body}</MDXRenderer>
        <Social />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    mdx(frontmatter: {title: {eq: "about"}}) {
      id
      body
    }
  }
`;
