import styled from "styled-components";
import EditTask from "./EditTask";
import { useState } from "react";

export default function TaskPage({
  allTasks = [],
  onDeleteTask,
  onEditTask,
  status,
  onChangeStatus,
  editing,
  toggleEditMode,
  onCelebration,
}) {
  const [editId, setEditId] = useState();

  function handleMove(event, newStatus, taskId) {
    event.preventDefault();

    const confirmation = confirm("möchtest du dieses Vorhaben verschieben?");

    if (confirmation) {
      const currentTask = allTasks.find((task) => task.id === taskId);
      const taskWithNewStatus = { ...currentTask, status: newStatus };
      onEditTask(taskWithNewStatus, taskId);
      console.log("newStatus", newStatus);
      if (newStatus === "done") {
        onCelebration();
      } else {
        return;
      }
    } else {
      return;
    }
  }

  console.log("editing", editing);

  function handleEditMode(taskId) {
    toggleEditMode();
    setEditId(taskId);
  }

  return (
    <>
      <ButtonContainer>
        <button
          type="button"
          className={status === "backlog" ? "current" : ""}
          onClick={() => onChangeStatus("backlog")}
          aria-label="show backlog section"
        >
          Backlog
        </button>
        <button
          type="button"
          className={status === "ready" ? "current" : ""}
          onClick={() => onChangeStatus("ready")}
          aria-label="show ready section"
        >
          Ready
        </button>
        <button
          type="button"
          className={status === "wip" ? "current" : ""}
          onClick={() => onChangeStatus("wip")}
          aria-label="show work in progress section"
        >
          in Arbeit
        </button>
        <button
          type="button"
          className={status === "done" ? "current" : ""}
          onClick={() => onChangeStatus("done")}
          aria-label="show done section"
        >
          Fertig!
        </button>
      </ButtonContainer>
      {allTasks
        .filter((task) => task.status === status)
        .map((task) =>
          editing && editId === task.id ? (
            <EditTask
              key={task.id}
              allTasks={allTasks}
              currentTask={task}
              editId={editId}
              onEditTask={onEditTask}
              toggleEditMode={toggleEditMode}
            />
          ) : (
            <Task key={task.id} style={{ background: task.colour }}>
              <h4>{task.headline}</h4>
              <p>{task.body}</p>
              <button type="button" onClick={() => handleEditMode(task.id)}>
                bearbeiten
              </button>
              <button
                type="button"
                onClick={(event) => onDeleteTask(event, task.id)}
              >
                löschen
              </button>
              {status === "backlog" && (
                <button
                  type="button"
                  onClick={(event) => handleMove(event, "ready", task.id)}
                >
                  bereit?
                </button>
              )}
              {status === "ready" && (
                <button
                  type="button"
                  onClick={(event) => handleMove(event, "wip", task.id)}
                >
                  in Arbeit?
                </button>
              )}
              {status === "wip" && (
                <button
                  type="button"
                  onClick={(event) => handleMove(event, "done", task.id)}
                >
                  fertig?
                </button>
              )}
            </Task>
          )
        )}
    </>
  );
}

const Task = styled.section`
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
  padding: 0.5rem;

  button {
    background-color: var(--secondary);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    &.current {
      background-color: var(--primary);
    }
  }
`;
