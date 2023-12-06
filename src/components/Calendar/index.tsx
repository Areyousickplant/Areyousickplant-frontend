import { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.scss";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar
        locale="en"
        onChange={onChange}
        next2Label={null}
        prev2Label={null}
        minDetail="month"
        formatDay={(locale, date) => moment(date).format("D")}
        showNeighboringMonth={false}
        value={value}
      />
    </div>
  );
}

export default MyCalendar;
