import styled from "styled-components";
import Image from "next/image";
import RandomImageFetch from "./RandomImageFetch";
import getRandomNumber from "../helpers/getRandomNumber";

export default function RandomImage({ randomImage }) {
  const imageData = RandomImageFetch();
  console.log(imageData, "imageData");

  const randomIndex = getRandomNumber();

  const url = imageData[randomIndex]?.urls?.regular;

  console.log("url", url);
  console.log(randomIndex, "randomIndex");

  return (
    <StyledImagePage>
      <StyledImageContainer>
        <Image
          src={url}
          alt="random image"
          layout="fill"
          objectFit="cover"
          priority
        />{" "}
      </StyledImageContainer>
      <button onClick={randomImage}>zurück</button>
    </StyledImagePage>
  );
}

const StyledImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-color: black;
  position: relative;
`;

const StyledImagePage = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    background-color: black;
    color: white;
    padding: 1rem;
    border: 1px solid darkmagenta;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    width: 50%;
    position: absolute;
    bottom: -100px;
  }
`;
