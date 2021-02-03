/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Heading, Image, jsx, Link, Text } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const tags = post.frontmatter.tags;

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={post.frontmatter.image.childImageSharp.fluid.src}
      ogType="article"
    >
      <article>
        <Container>
          <Image
            src={post.frontmatter.image.childImageSharp.fluid.src}
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
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${tag}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </article>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`;
