/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Heading, jsx, Text } from "theme-ui";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout title="Introuvable" description="Take a nap!">
      <div
        sx={{
          backgroundImage: "url('/img/take-a-nap.jpg')",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Container variant="main">
          <Heading as="h1">404 Fichier introuvable</Heading>
          <Text sx={{ mt: "50vh" }}>
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
        </Container>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
