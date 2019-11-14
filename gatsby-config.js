module.exports = {
  siteMetadata: {
    title: `Katia Yoga`,
    author: `Danay Izquierdo`,
    description: `Clases de Yoga en Usurbil, Donostia, San-Sebastian`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Katia Yoga`,
        author:`Danay Izquierdo`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/images/website-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
