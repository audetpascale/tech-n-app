import BlogSummary from "../components/BlogSummary";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import React from "react";

const IndexPage = (props) => {
  let i = 0;

  return (
    <Layout>
      {props.data.allMarkdownRemark.edges.map(({ node: post }) => (
        <BlogSummary key={post.id} post={post} numChild={i++} />
      ))}
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-page" } } }
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 255)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "D MMMM YYYY", locale: "fr")
            description
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            templateKey
            title
          }
        }
      }
    }
  }
`;
