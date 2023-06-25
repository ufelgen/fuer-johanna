import styled from "styled-components";
import { StyledForm } from "./Styles";

export default function EditTask({ currentTask, onEditTask, toggleEditMode }) {
  function handleEditedTask(event) {
    event.preventDefault();
    const editedTask = {
      ...currentTask,
      headline: event.target.elements.taskHeadline.value,
      body: event.target.elements.taskBody.value,
      colour: event.target.elements.taskColour.value,
      status: event.target.elements.taskStatus.value,
    };

    onEditTask(editedTask, currentTask.id);
    toggleEditMode();
  }
  return (
    <EditTaskForm
      onSubmit={(event) => handleEditedTask(event)}
      style={{ background: currentTask.colour }}
    >
      <input
        id="taskHeadline"
        name="taskHeadline"
        defaultValue={currentTask.headline}
      />
      <textarea
        cols={20}
        rows={5}
        name="taskBody"
        id="taskBody"
        defaultValue={currentTask.body}
      />
      <input
        type="color"
        id="taskColour"
        name="taskColour"
        defaultValue={currentTask.colour}
      />
      <select
        id="taskStatus"
        name="taskStatus"
        defaultValue={currentTask.status}
      >
        <option value="backlog" name="backlog">
          Backlog
        </option>
        <option value="ready" name="ready">
          Ready
        </option>
        <option value="wip" name="wip">
          in Arbeit
        </option>
        <option value="done" name="done">
          Fertig
        </option>
      </select>
      <div>
        <button type="button" onClick={toggleEditMode}>
          zurück
        </button>
        <button type="submit">Änderungen speichern</button>
      </div>
    </EditTaskForm>
  );
}

const EditTaskForm = styled(StyledForm)`
  margin: 1rem;
  padding: 0.5rem;
`;
