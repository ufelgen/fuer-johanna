import styled from "styled-components";

export default function Entry({ currentEntry }) {
  return <StyledP>{currentEntry.date}</StyledP>;
}

const StyledP = styled.p`
  color: white;
`;
