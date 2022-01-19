import Calendar from "react-datepicker";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ title, icon }) => {
  const [date, setDate] = useState(new Date());
  return (
    <Form style={{marginRight: 15}}>
      <Form.Label>{title}</Form.Label>
      <Calendar showYearDropdown selected={date} onChange={(date) => setDate(date)} maxDate={new Date()}/>
    </Form>
  );
};

export default DatePicker;
