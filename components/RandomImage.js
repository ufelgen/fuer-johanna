import styled from "styled-components";
import Image from "next/image";

export default function RandomImage({ setImage }) {
  function getRandomNumber() {
    return Math.floor(Math.random() * 99);
  }

  const url =
    "https://source.unsplash.com/collection/1270951/" + getRandomNumber();

  return (
    <StyledImagePage>
      <Image src={url} alt="cute animal" width={300} height={300} priority />
      <button onClick={() => setImage(false)}>back</button>
    </StyledImagePage>
  );
}

const StyledImagePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    background-color: hotpink;
    color: white;
    padding: 2rem;
    border: 1px solid darkmagenta;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    width: 50%;
  }
`;
