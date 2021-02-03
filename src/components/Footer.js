/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, jsx } from "theme-ui";

const Menu = () => {
  return (
    <footer sx={{ backgroundColor: "muted" }}>
      <Container>
        © 2013 - {new Date().getFullYear()} Pascale Audet, propulsé par{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a> et{" "}
        <a href="https://www.netlify.com/">Netlify</a>
      </Container>
    </footer>
  );
};

export default Menu;
