import BlogSummary from "../components/BlogSummary";
import { Container, Heading } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import React from "react";

const TagePage = ({ data, pageContext }) => {
  let i = 0;
  return (
    <Layout title={pageContext.tag}>
      <Container>
        <Heading as="h2">#{pageContext.tag}</Heading>
        <Heading as="h3">
          {data.allMarkdownRemark.totalCount} article
          {data.allMarkdownRemark.totalCount > 1 && "s"}
        </Heading>
      </Container>
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <BlogSummary key={post.id} post={post} numChild={i++} />
      ))}
    </Layout>
  );
};

export default TagePage;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
