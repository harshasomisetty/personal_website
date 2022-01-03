module.exports = {
  siteMetadata: {
    title: "Harsha's Website",
    description: "My website about me and what I'm working on",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
  ],
}
