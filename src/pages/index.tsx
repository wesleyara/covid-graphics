import type { NextPage } from "next";
import { Graphics } from "../components/Graphics";
import { Header } from "../layout/Header";
import { Container } from "../styles/home/style";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Graphics />
      </Container>
    </>
  );
};

export default Home;
