import React from "react";
import {graphql} from "gatsby";
import {MDXRenderer, MDXProvider} from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import Projects from "../components/Projects.js";

export default function Home({data}) {
  const about = data.about;
  console.log(about.body);
  // const projects = data.projects;

  return (
    <Layout>
      <div className="m-10 flex flex-col space-y-5">
        <MDXRenderer>{about.body}</MDXRenderer>
        <Projects />
        {/* <MDXRenderer>{projects.body}</MDXRenderer> */}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    about: mdx(frontmatter: {title: {eq: "about"}}) {
      id
      body
    }
  }
`;
