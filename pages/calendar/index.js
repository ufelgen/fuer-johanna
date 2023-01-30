import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import { useState } from "react";
import { defaultEntries } from "../../helpers/entries";

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [entries, setEntries] = useState(defaultEntries);

  function updateEntries(newEntry) {
    setEntries([...entries, newEntry]);
    console.log(entries);
  }

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const selectedDay = date.getDate();
      const selectedMonth = date.getMonth() + 1;
      const selectedYear = date.getFullYear();

      const hasMood = entries.find((entry) => {
        const day = entry.date.split("-")[2];
        const month = entry.date.split("-")[1];
        const year = entry.date.split("-")[0];
        return (
          selectedDay == day && selectedMonth == month && selectedYear == year
        );
      });

      if (hasMood) {
        return hasMood.mood;
      }
    }
  };

  function handleShowForm(date) {
    setDate(date);
    setShowForm(!showForm);
  }

  return (
    <StyledCalenderPage>
      <StyledCalendarContainer>
        <Calendar
          locale="de-DE"
          tileClassName={tileClassName}
          value={date}
          onClickDay={(value) => handleShowForm(value)}
        />
      </StyledCalendarContainer>
      {showForm && (
        <Form
          date={date}
          updateEntries={updateEntries}
          handleShowForm={handleShowForm}
        />
      )}
      <Footer />
    </StyledCalenderPage>
  );
}

const StyledCalenderPage = styled.main`
  height: 100%;
  margin-bottom: 10vh;
  background: var(--background-gradient);
`;

const StyledCalendarContainer = styled.section`
  padding: 2rem;
  position: relative;
  button {
    margin: 2px;
    background-color: var(--secondary);
    border-radius: 3px;
    color: white;
  }
  .react-calendar__navigation button {
    margin: 2px;
    background-color: var(--primary);
    border-radius: 3px;
    color: white;
  }

  .react-calendar__tile--now {
    box-shadow: 0 0 2px 2px hotpink;
  }

  .react-calendar {
    border: none;
    border-radius: 4px;
    margin: auto;
    padding: 3px;
    box-shadow: 2px 2px 15px 2px #c4c4c4;
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
  }
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__tile--active {
    color: black;
  }
  .react-calendar__tile--active:enabled:hover {
    background: hotpink;
  }
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  // classes for dynamic background
  .hotpink {
    background: hotpink;
    color: white;
  }

  .white {
    background: white;
    color: black;
  }

  .black {
    background: black;
    color: white;
  }
  .lightgreen {
    background: lightgreen;
  }

  .yellow {
    background: yellow;
  }

  ////
`;
