/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, jsx, Text } from "theme-ui";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

const Footer = ({ author, title }) => {
  return (
    <footer sx={{ backgroundColor: "muted" }}>
      <Container>
        <Text>
          © 2013 - {new Date().getFullYear()} {author}.
          <span sx={{ float: "right" }}>
            <StaticImage
              alt="tech 'n' app"
              src="../images/icon.png"
              width={20}
              height={20}
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
