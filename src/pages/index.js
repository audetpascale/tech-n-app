import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
/** @jsx jsx */
// noinspection ES6UnusedImports
import { Box, Container, Grid, Heading, jsx, Text } from "theme-ui";

const IndexPage = (props) => {
  let imageWasRight = true;
  return (
    <Container>
      <title>Accueil</title>
      {props.data.allMarkdownRemark.edges.map(({ node: post }) => {
        const img = (
          <Box
            sx={{
              backgroundImage: `url(/img/${post.id}.jpg)`,
              backgroundPosition: "center",
            }}
          />
        );
        const text = (
          <Box p={4}>
            <Heading as="h3">
              <Link sx={{ color: "primary" }} to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </Heading>
            <Heading as="h4">{post.frontmatter.date}</Heading>
            <Text>{post.excerpt}</Text>
            <Text sx={{ textAlign: "right" }}>
              <Link sx={{ color: "secondary" }} to={post.fields.slug}>
                Lire →
              </Link>
            </Text>
          </Box>
        );

        const boxes = imageWasRight ? [img, text] : [text, img];
        imageWasRight = !imageWasRight;

        return (
          <Grid key={post.id} columns={2} width={256}>
            {boxes}
          </Grid>
        );
      })}
    </Container>
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
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
