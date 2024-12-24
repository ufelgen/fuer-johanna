import styled from "styled-components";
import Image from "next/image";
import { useFetch } from "../helpers/useFetch";

export default function RandomImageFetch() {
  //{ setImage }
  const image = useFetch(
    // "https://api.unsplash.com/photos/random/?client_id=WKBB_hRTpI7rLsirREapzkzb5LnFcgG1uPiZBv1qBQ0"
    "https://api.unsplash.com/photos/?client_id=DO-2ZSrlvG9NonSxNNbh2szxV1gXNj3tQqPiyDg8y_A"
  );

  return image;
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
