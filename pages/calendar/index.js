import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
//import { Badge } from "@mui/material";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const entries = [];

  const tileContent = ({ date, view }) => {
    // gets the day and month seperately of the selected day
    if (view === "month") {
      const selectedDay = date.getDate();
      const selectedMonth = date.getMonth() + 1;

      // gets the day and month seperately of the birthdays in the entries and compares if dates are the same (without the year)
      const hasBirthday = entries.find((entry) => {
        const birthDay = entry.birthday.split("-")[2];
        const birthMonth = entry.birthday.split("-")[1];
        return selectedDay == birthDay && selectedMonth == birthMonth;
      });

      // if the comparison is true, a MUI Badge will be added to the day to indicate that there is a birthday on this day
      if (hasBirthday) {
        return <Badge overlap="circular" badgeContent={"🎁"} />;
      }
    }
  };

  function handleClickDay(date, event, entries) {
    setDate(date);

    const selectedDay = date.getDate();
    const selectedMonth = date.getMonth() + 1;

    // searches for every entry that has the birthday on the same day as selected
    const birthdates = entries.filter((entry) => {
      const birthDay = entry.birthday.split("-")[2];
      const birthMonth = entry.birthday.split("-")[1];
      return birthDay == selectedDay && birthMonth == selectedMonth;
    });
    setBirthdays(birthdates);
  }
  return (
    <StyledCalenderPage>
      <StyledCalendarContainer>
        <Calendar
          locale="de-DE"
          tileContent={tileContent}
          value={date}
          onClickDay={(value, event) => handleClickDay(value, event, entries)}
        />
      </StyledCalendarContainer>
      <Footer />
    </StyledCalenderPage>
  );
}

const StyledCalenderPage = styled.main`
  height: 100vh;
  margin-bottom: 10vh;
  background: rgb(5, 0, 10);
  background: linear-gradient(
    0deg,
    rgba(5, 0, 10, 1) 0%,
    rgba(171, 11, 153, 1) 70%,
    rgba(213, 108, 197, 1) 100%,
    rgba(194, 201, 255, 1) 100%
  );
`;

// styled components are not possible with react-calendar and MUI Badges, therefore it's styled with the classes from the DevTools here
const StyledCalendarContainer = styled.section`
  margin: 2rem;
  position: relative;
  button {
    margin: 2px;
    background-color: var(--darkgray);
    border-radius: 3px;
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
    background: var(--yellow);
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
  .MuiBadge-badge {
    position: absolute;
    top: -10px;
    right: -6px;
  }
`;
