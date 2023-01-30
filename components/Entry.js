import styled from "styled-components";
import format from "date-fns/format";

export default function Entry({ currentEntry }) {
  const mood = currentEntry?.mood.split("-")[0];
  const colour = currentEntry.mood.split("-")[1];

  return (
    <StyledEntry>
      <p>Am {format(new Date(currentEntry.date), "dd.MM.yyyy")}</p>
      <p
        style={{ backgroundColor: colour }}
        className={colour == "black" ? "dark" : ""}
      >
        habe ich mich {mood} gefühlt,
      </p>
      <p>denn das war gut: {currentEntry.good}</p>
      <p>und das war doof: {currentEntry.bad}</p>
    </StyledEntry>
  );
}

const StyledEntry = styled.section`
  margin: 0rem 2rem 2rem 2rem;
  padding: 1rem;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: black;
  .dark {
    color: white;
  }
`;
