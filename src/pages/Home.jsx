import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <Container>
          <ScaleLoader
            color="teal"
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Container>
      ) : (
        <div>
          <Announcement />
          <Navbar />
          <Slider />
          <Categories />
          <Products />
          <Newsletter />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
