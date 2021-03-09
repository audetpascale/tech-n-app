/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Image, jsx, Text } from "theme-ui";
import PropTypes from "prop-types";

const Footer = ({ author, title }) => {
  return (
    <footer sx={{ backgroundColor: "muted" }}>
      <Container>
        <Text>
          © 2013 - {new Date().getFullYear()} {author}.
          <span sx={{ float: "right" }}>
            <Image
              alt="tech 'n' app"
              src="/icons/icon-48x48.png"
              mb="-6px"
              sx={{ size: "20px" }}
            />
            {title} est propulsé par{" "}
            <a href="https://www.gatsbyjs.com/">Gatsby</a> et{" "}
            <a href="https://www.netlify.com/">Netlify</a>.
          </span>
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
};
