/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Image, jsx, Text } from "theme-ui";

const Menu = ({ author, title }) => {
  return (
    <footer sx={{ backgroundColor: "muted" }}>
      <Container>
        <Text>
          © 2013 - {new Date().getFullYear()} {author}.
        </Text>
        <br />
        <Text sx={{ textAlign: "right" }}>
          <Image alt="tech 'n' app" src="/icons/icon-48x48.png" my={-3} />
          {title} est propulsé par{" "}
          <a href="https://www.gatsbyjs.com/">Gatsby</a> et{" "}
          <a href="https://www.netlify.com/">Netlify</a>.
        </Text>
      </Container>
    </footer>
  );
};

export default Menu;
