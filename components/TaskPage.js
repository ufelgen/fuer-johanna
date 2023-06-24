import styled from "styled-components";

export default function TaskPage({ allTasks = [], status, onChangeStatus }) {
  function handleMove(newStatus, taskId) {}
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
        .map((task) => (
          <Task key={task.id} style={{ background: task.colour }}>
            <h4>{task.headline}</h4>
            <p>{task.body}</p>
            <button type="button">bearbeiten</button>
            {status === "backlog" && (
              <button
                type="button"
                onClick={() => handleMove("ready", task.id)}
              >
                bereit?
              </button>
            )}
          </Task>
        ))}
    </>
  );
}

const Task = styled.section`
  margin: 1rem;
  padding: 0.5rem;
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
