/** @jsx jsx */
// noinspection ES6UnusedImports
import { Box, Container, Grid, Heading, jsx, Text } from "theme-ui";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";

const IndexPage = (props) => {
  let imageWasRight = true;

  return (
    <Layout>
      {props.data.allMarkdownRemark.edges.map(({ node: post }) => {
        const img = (
          <Box
            key="img"
            sx={{
              backgroundImage: `url(${post.frontmatter.image.childImageSharp.fluid.src})`,
              backgroundPosition: "center",
              backgroundSize: "100% auto",
            }}
          />
        );
        const text = (
          <Container key="info">
            <Heading as="h3">
              <Link sx={{ color: "primary" }} to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </Heading>
            <Heading as="h4">{post.frontmatter.description}</Heading>
            <Heading as="h5">{post.frontmatter.date}</Heading>
            <Text>{post.excerpt}</Text>
            <Text sx={{ textAlign: "right" }}>
              <Link sx={{ color: "secondary" }} to={post.fields.slug}>
                Lire →
              </Link>
            </Text>
          </Container>
        );

        const elements = imageWasRight ? [img, text] : [text, img];
        imageWasRight = !imageWasRight;

        return (
          <Grid key={post.id} columns={2} width={256}>
            {elements}
          </Grid>
        );
      })}
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
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
