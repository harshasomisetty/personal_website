import React from "react";
import Layout from "../components/Layout";
import {graphql, Link} from "gatsby";

export default function Blog({data}) {
  const {posts} = data.blog;
  console.log(posts[0]);

  return <p>under construction</p>;
  // return (
  //   <Layout>
  //     <div>
  //       <h1>My blog posts</h1>

  //       {posts.map((post) => (
  //         <article key={post.id}>
  //           <Link to={post.fields.slug}>
  //             <h2>{post.frontmatter.title}</h2>
  //           </Link>
  //           <small>
  //             {post.frontmatter.author}, {post.frontmatter.date}
  //           </small>
  //           <p>{post.excerpt}</p>
  //         </article>
  //       ))}
  //     </div>
  //   </Layout>
  // );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`;
