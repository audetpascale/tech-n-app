/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Flex, Image, jsx, NavLink } from "theme-ui";

const Header = () => {
  return (
    <header>
      <nav sx={{ backgroundColor: "muted" }}>
        <Container>
          <Flex as="nav">
            <NavLink href="/" px={4}>
              <Image alt="tech 'n' app" src="/icons/icon-48x48.png" my={-3} />
              Accueil
            </NavLink>
            <NavLink href="/tags" px={4}>
              Étiquette
            </NavLink>
            <NavLink href="/about" px={4}>
              À propos
            </NavLink>
          </Flex>
        </Container>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {};
