module.exports = {
  siteMetadata: {
    title: "Tech 'n' App",
    author: "Pascale Audet",
    description:
      "Techniques et applications à développer. Suivez-moi sur mon blog ! Apprenez et profitez de mes apprentissages et de mes erreurs - progressez avec moi !",
    siteUrl: "https://tech-n-app.audetpascale.com",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/pages/blog/",
      },
      __key: "markdown-pages",
    },
  ],
};
