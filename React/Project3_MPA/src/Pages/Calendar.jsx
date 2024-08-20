import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

const CalendarPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Calendar</h2>
        <CustomCalendar />
      </div>
    </div>
  );
};

export default CalendarPage;
