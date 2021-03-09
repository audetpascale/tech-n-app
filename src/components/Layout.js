import Footer from "./Footer";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children, title, description, image, ogType }) => {
  const defaultSiteMetadata = useStaticQuery(graphql`
    query defaultSiteMetadata {
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
    title:
      (title == null ? "" : `${title} | `) +
      defaultSiteMetadata.site.siteMetadata.title,
    description:
      description || defaultSiteMetadata.site.siteMetadata.description,
    image: `${defaultSiteMetadata.site.siteMetadata.siteUrl}${
      image || defaultSiteMetadata.site.siteMetadata.image
    }`,
    url: `${defaultSiteMetadata.site.siteMetadata.siteUrl}${
      useLocation().pathname
    }`,
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
          content={
            defaultSiteMetadata.site.siteMetadata.description.twitterUsername
          }
        />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>
      <Header />
      {children}
      <Footer
        author={defaultSiteMetadata.site.siteMetadata.author}
        title={defaultSiteMetadata.site.siteMetadata.title}
      />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  ogType: PropTypes.string,
};
