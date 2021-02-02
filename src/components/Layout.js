import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, ogImage, ogType }) => {
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
        }
      }
    }
  `);

  const titleWithSite =
    (title == null ? "" : `${title} | `) + data.site.siteMetadata.title;

  return (
    <div>
      <Helmet>
        <html lang="fr-ca" />
        <title>{titleWithSite}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content={ogType || "website"} />
        <meta property="og:title" content={titleWithSite} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={ogImage || data.site.siteMetadata.image}
        />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
