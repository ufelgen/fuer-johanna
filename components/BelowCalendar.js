import styled from "styled-components";
import format from "date-fns/format";
import Form from "./Form";
import Entry from "./Entry";
import EditEntry from "./EditEntry";
import { useState } from "react";

export default function BelowCalendar({
  allEntries,
  date,
  onUpdateEntries,
  onHideForm,
  onDeleteEntry,
  onUpdateEntry,
}) {
  const [editing, setEditing] = useState(false);
  const currentEntry = allEntries.find(
    (entry) => entry.date == format(new Date(date), "yyyy-MM-dd")
  );

  function toggleEditMode() {
    setEditing(!editing);
  }

  return (
    <StyledContainer>
      {currentEntry?.mood && editing && (
        <EditEntry
          currentEntry={currentEntry}
          onToggleEditMode={toggleEditMode}
          onUpdateEntry={onUpdateEntry}
        />
      )}
      {currentEntry?.mood && !editing && (
        <Entry
          currentEntry={currentEntry}
          onDeleteEntry={onDeleteEntry}
          onHideForm={onHideForm}
          onToggleEditMode={toggleEditMode}
        />
      )}
      {!currentEntry?.mood && !editing && (
        <Form
          date={date}
          onUpdateEntries={onUpdateEntries}
          onHideForm={onHideForm}
        />
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  margin-bottom: 10vh;
`;
