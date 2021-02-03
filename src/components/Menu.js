/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Flex, jsx, NavLink } from "theme-ui";
import React from "react";

const Menu = () => {
  return (
    <div sx={{ backgroundColor: "highlight" }}>
      <Container>
        <Flex as="nav">
          <NavLink href="/" p={2}>
            Accueil
          </NavLink>
          <NavLink href="/about" p={2}>
            À propos
          </NavLink>
        </Flex>
      </Container>
    </div>
  );
};

export default Menu;
