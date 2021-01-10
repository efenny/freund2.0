const dotenv = require("dotenv")

dotenv.config({ path: ".env" })

module.exports = {
  siteMetadata: {
    title: `Erik Freundorfer`,
    jobDescription: `Frontend Developer/Designer`,
    description: `Frontend Developer with a passion for creating beautiful web experiences. Currently learning WebGL.`,
    author: `Erik Freundorfer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/images/favicon.png",
        orientation: "any",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
}
