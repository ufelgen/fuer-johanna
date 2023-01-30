import RandomImageButton from "../components/RandomImageButton";
import RandomImage from "../components/RandomImage";
import Greeting from "../components/Greeting";
import Footer from "../components/Footer";
import { getGreeting } from "../helpers/getGreeting";
import styled from "styled-components";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(false);
  function handleRandomImage() {
    setImage(!image);
  }

  const greeting = getGreeting();

  return (
    <StyledMain>
      {image ? (
        <RandomImage randomImage={handleRandomImage} />
      ) : (
        <>
          <Greeting greeting={greeting} />
          <RandomImageButton randomImage={handleRandomImage} />
        </>
      )}
      <Footer />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 10vh;
  background: rgb(5, 0, 10);
  background: linear-gradient(
    0deg,
    rgba(5, 0, 10, 1) 0%,
    rgba(171, 11, 153, 1) 70%,
    rgba(213, 108, 197, 1) 100%,
    rgba(194, 201, 255, 1) 100%
  );
`;
