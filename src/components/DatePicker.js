import Calendar from "react-datepicker";
import { Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ title, icon, onChange, date, maxDate, minDate }) => {
  return (
    <Form style={{ marginRight: 15 }}>
      <Form.Label>{icon}{title}</Form.Label>
      <Calendar
        showYearDropdown
        selected={date}
        onChange={(newDate) => onChange(newDate)}
        maxDate={maxDate}
        minDate={minDate}
      />
    </Form>
  );
};

export default DatePicker;
