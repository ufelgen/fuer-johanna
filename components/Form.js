import styled from "styled-components";
import format from "date-fns/format";
import { colours } from "../helpers/colours";

export default function Form({ date, updateEntries, handleShowForm }) {
  function handleSubmitForm(event) {
    event.preventDefault();
    const newEntry = {
      date: format(new Date(date), "yyyy-MM-dd"),
      mood: event.target.elements.colour.value,
      good: event.target.elements.good.value,
      bad: event.target.elements.bad.value,
    };

    updateEntries(newEntry);
    handleShowForm();
  }
  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <label htmlFor="colour">Wie fühlst du dich heute?</label>
      <select name="colour">
        {colours.map((colour) => (
          <option value={colour.colour} key={colour.colour}>
            {colour.mood}
          </option>
        ))}
      </select>
      <label htmlFor="good">Was ist heute schön?</label>
      <textarea cols={20} rows={5} name="good" />
      <label htmlFor="bad">Was ist heute doof?</label>
      <textarea cols={20} rows={5} name="bad" />
      <button type="submit">speichern</button>
      <button type="button" onClick={handleShowForm}>
        zurück
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0rem 2rem 1rem 2rem;
  padding: 1rem;
  background-color: pink;
  display: flex;
  flex-direction: column;
`;
