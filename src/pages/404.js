import { Helmet } from "react-helmet";
import { Link } from "gatsby";
/** @jsx jsx */
// noinspection ES6UnusedImports
import { Box, Container, Heading, jsx, Text } from "theme-ui";

const NotFoundPage = () => {
  return (
    <Container
      sx={{
        backgroundImage: 'url("/img/take-a-nap.jpg")',
        backgroundPosition: "center",
        height: "100vh",
        position: "absolute",
        width: "100%",
      }}
    >
      <Helmet>
        <title>Introuvable</title>
        <meta httpEquiv="content-language" content="fr-ca" />
      </Helmet>
      <Box sx={{ m: "10%" }}>
        <Heading>404 Fichier introuvable</Heading>
        <Text sx={{ mt: "55vh" }}>
          Je suis désolée,{" "}
          <span role="img" aria-label="sleeping emoji">
            😔💤
          </span>{" "}
          je{" "}
          <big>
            <i>take a nap</i>
          </big>
          .
        </Text>
        <Text sx={{ textAlign: "right" }}>
          <Link to="/" sx={{ color: "secondary" }}>
            Accueil
          </Link>
        </Text>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
