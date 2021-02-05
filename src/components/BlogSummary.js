/** @jsx jsx */
// noinspection ES6UnusedImports
import { Box, Container, Grid, Heading, jsx, Text } from "theme-ui";
import { Link } from "gatsby";

const BlogSummary = ({ post, numChild }) => {
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
    <article key="info">
      <Container>
        <Heading as="h3">
          <Link sx={{ color: "primary" }} to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </Heading>
        <Heading as="h4">{post.frontmatter.description}</Heading>
        <Heading as="h5">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
        </Heading>
        <Text>
          <summary>{post.excerpt}</summary>
        </Text>
        <Text sx={{ textAlign: "right" }}>
          <Link sx={{ color: "secondary" }} to={post.fields.slug}>
            Lire →
          </Link>
        </Text>
      </Container>
    </article>
  );

  const elements = numChild % 2 ? [img, text] : [text, img];

  return (
    <Grid columns={2} width={256}>
      {elements}
    </Grid>
  );
};

export default BlogSummary;
