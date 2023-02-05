import RandomImageButton from "../components/RandomImageButton";
import RandomImage from "../components/RandomImage";
import Greeting from "../components/Greeting";
import Footer from "../components/Footer";
import { getGreeting } from "../helpers/getGreeting";
import styled from "styled-components";
import { useState } from "react";
import format from "date-fns/format";
import Confetti from "react-confetti";
import useWindowDimensions from "../helpers/useWindowSize";

export default function Home() {
  const [image, setImage] = useState(false);
  function handleRandomImage() {
    setImage(!image);
  }

  const greeting = getGreeting();

  const today = format(new Date(), "dd-MM");

  const { height, width } = useWindowDimensions();

  return (
    <StyledMain>
      {today === "05-02" && <Confetti width={width} height={height} />}
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
  background: var(--background-gradient);
`;
