/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Flex, jsx, NavLink } from "theme-ui";

const Menu = () => {
  return (
    <div sx={{ backgroundColor: "muted" }}>
      <Container>
        <Flex as="nav">
          <NavLink href="/" px={4}>
            Accueil
          </NavLink>
          <NavLink href="/about" px={4}>
            À propos
          </NavLink>
        </Flex>
      </Container>
    </div>
  );
};

export default Menu;
