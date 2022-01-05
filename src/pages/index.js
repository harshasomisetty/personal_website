import React from "react";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import Projects from "../components/Projects.js";

export default function Home({data}) {
  const main = data.main_md;
  // const about = data.about;

  return (
    <Layout>
      <div className="m-10 flex flex-col space-y-5">
        <MDXRenderer>{main.body}</MDXRenderer>
        <Projects />
        {/* <MDXRenderer>{about.body}</MDXRenderer> */}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    main_md: mdx(frontmatter: {title: {eq: "main"}}) {
      id
      body
    }
    about: mdx(frontmatter: {title: {eq: "about"}}) {
      id
      body
    }
  }
`;
