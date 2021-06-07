/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Heading, Image, jsx, Text } from "theme-ui";
import { getSrc } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";

const BlogPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const tags = post.frontmatter.tags;

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={getSrc(post.frontmatter.image.childImageSharp.gatsbyImageData)}
      ogType="article"
    >
      <article>
        <Container variant="main">
          <Image
            src={getSrc(post.frontmatter.image.childImageSharp.gatsbyImageData)}
            variant="heading"
          />
          <Heading as="h2">{post.frontmatter.title}</Heading>
          <Heading as="h3">{post.frontmatter.description}</Heading>
          <Heading as="h4">
            <time dateTime={post.frontmatter.date}>
              {post.frontmatter.date}
            </time>
          </Heading>
          <Text dangerouslySetInnerHTML={{ __html: post.html }} />
          {tags && tags.length ? (
            <section>
              <Heading as="h4">Étiquette</Heading>
              <Text>
                {tags.map((tag) => (
                  <span key={tag}>
                    <Link to={`/tags/${tag}/`}>#{tag}</Link>{" "}
                  </span>
                ))}
              </Text>
            </section>
          ) : null}
        </Container>
      </article>
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "D MMMM YYYY", locale: "fr")
        description
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        tags
      }
    }
  }
`;
