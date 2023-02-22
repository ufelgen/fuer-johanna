import styled from "styled-components";
import { useState } from "react";
import Footer from "../../components/Footer";
import RandomButton from "../../components/RandomImageButton";
import RandomAdvice from "../../components/RandomAdvice";

export default function Advice() {
  const [advice, setAdvice] = useState("");
  const url = "https://api.adviceslip.com/advice";

  async function fetchAdvice() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error(error);
    }
  }

  setTimeout(() => {
    setAdvice("");
  }, "10000");

  return (
    <StyledAdvicePage>
      <RandomButton buttonFunction={fetchAdvice} />
      {advice !== "" && <RandomAdvice advice={advice.advice} />}

      <Footer />
    </StyledAdvicePage>
  );
}

const StyledAdvicePage = styled.main`
  height: 100vh;
  margin-bottom: 10vh;
  background: var(--background-gradient-2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
