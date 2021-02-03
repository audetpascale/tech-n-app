import Footer from "./Footer";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "./Header";
import { useLocation } from "@reach/router";
import React from "react";

const Layout = ({ children, title, description, image, ogType }) => {
  const data = useStaticQuery(graphql`
    query siteMetadata {
      site {
        siteMetadata {
          title
          author
          description
          image
          language
          siteUrl
          twitterUsername
        }
      }
    }
  `);

  const seo = {
    title: (title == null ? "" : `${title} | `) + data.site.siteMetadata.title,
    description: description || data.site.siteMetadata.description,
    image: `${data.site.siteMetadata.siteUrl}${
      image || data.site.siteMetadata.image
    }`,
    url: `${data.site.siteMetadata.siteUrl}${useLocation().pathname}`,
  };

  return (
    <div>
      <Helmet title={seo.title}>
        <html lang="fr-ca" />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content={ogType || "website"} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />

        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={data.site.siteMetadata.description.twitterUsername}
        />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
