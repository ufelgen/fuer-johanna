import styled from "styled-components";
import Footer from "../../components/Footer";
import { useState } from "react";
import { fetchTaskData } from "../../helpers/fetchData";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { StyledPageMain } from "../../components/Styles";

import NewTask from "../../components/NewTask";
import TaskPage from "../../components/TaskPage";

export default function KanbanBoardPage({
  allTasks = [],
  onAllTasks,
  showForm,
  onShowForm,
  onHideForm,
  editing,
  toggleEditMode,
}) {
  const { data: session } = useSession();

  const [status, setStatus] = useState("backlog");

  function handleStatus(status) {
    setStatus(status);
  }

  async function updateTasks(newTask) {
    await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    async function performFetch() {
      const allTasksFromDatabase = await fetchTaskData();
      onAllTasks(allTasksFromDatabase);
    }
    performFetch();
  }

  async function deleteTask(event, id) {
    event.preventDefault();

    const confirmation = confirm(
      "möchtest du diesen Eintrag wirklich löschen?"
    );
    if (confirmation) {
      await fetch("/api/task/" + id, {
        method: "DELETE",
      });
      async function performFetch() {
        const allTasksFromDatabase = await fetchTaskData();
        onAllTasks(allTasksFromDatabase);
      }
      performFetch();
    }
  }

  async function handleEditTask(updatedTask, id) {
    await fetch("/api/tasks/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    async function performFetch() {
      const allTasksFromDatabase = await fetchTaskData();
      onAllTasks(allTasksFromDatabase);
    }
    performFetch();
  }

  return (
    <StyledPageMain>
      {session ? (
        <>
          <StyledAddButton onClick={onShowForm}>
            <AiFillPlusCircle />
          </StyledAddButton>
          {showForm ? (
            <NewTask onHideForm={onHideForm} onUpdateTasks={updateTasks} />
          ) : (
            <TaskPage
              allTasks={allTasks}
              onUpdateTasks={updateTasks}
              onDeleteTask={deleteTask}
              onEditTask={handleEditTask}
              status={status}
              onChangeStatus={handleStatus}
              editing={editing}
              toggleEditMode={toggleEditMode}
            />
          )}
          <ButtonContainer>
            <StyledLogoutButton onClick={() => signOut()}>
              abmelden
            </StyledLogoutButton>
          </ButtonContainer>
        </>
      ) : (
        <ButtonContainer>
          <StyledLoginButton onClick={() => signIn()}>
            anmelden
          </StyledLoginButton>
        </ButtonContainer>
      )}

      <Footer />
    </StyledPageMain>
  );
}

const StyledLoginButton = styled.button`
  padding: 1rem;
  margin: 1rem;
  align-self: center;
  justify-self: center;
  color: white;
  background-color: var(--primary);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 2rem;
`;

const StyledLogoutButton = styled(StyledLoginButton)`
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 11vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAddButton = styled.button`
  background-color: transparent;
  color: var(--primary);
  font-size: 7.7vh;
  position: absolute;
  bottom: 12vh;
  right: 1rem;
  border: none;
`;
