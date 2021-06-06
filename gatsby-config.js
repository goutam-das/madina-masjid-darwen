module.exports = {
  pathPrefix: "/madina-masjid-darwen",
  siteMetadata: {
    title: "Madina Masjid Darwen",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Cinzel Decorative\:400,700`],
        display: "swap",
      },
    },
  ],
};
