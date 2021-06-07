module.exports = {
  siteMetadata: {
    title: "Tech 'n' App",
    author: "Pascale Audet",
    description:
      "Techniques et applications à développer. Suivez-moi sur mon blog ! Apprenez et profitez de mes apprentissages et de mes erreurs - progressez avec moi !",
    image: "/icons/icon-512x512.png",
    language: "fr-ca",
    siteUrl: "https://tech-n-app.audetpascale.com",
    twitterUsername: "audetpascalea",
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              wrapperStyle: (fluidResult) =>
                `flex:${Math.round(fluidResult.aspectRatio)};`,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/pages/blog/",
      },
      __key: "markdown-pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
