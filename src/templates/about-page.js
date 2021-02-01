import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Container, Heading, Text } from "theme-ui";
import { Helmet } from "react-helmet";

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Container>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta httpEquiv="content-language" content="fr-ca" />
      </Helmet>
      <Heading as="h2">{post.frontmatter.title}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
