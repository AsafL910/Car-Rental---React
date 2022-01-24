import { Modal, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import DatePicker from "./DatePicker.js";
import { FaCalendarAlt } from "react-icons/fa";

const RentCarModal = ({ show, setShow, car }) => {
  const { user } = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const makeReservation = async () => {
    setShow(false);

    await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({
        startDate: startDate,
        endDate: endDate,
        userId: user.id,
        carId: car.car.id,
      }),
    });
  };
  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title>
          הזמנת רכב - {car.car.brand} {car.car.model} {car.car.year}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {user.status === 'אורח' ? <p>עליך להתחבר על מנת לבצע הזמנה</p> : 
      <>
      <DatePicker title="תאריך התחלה" icon={<FaCalendarAlt/>} onChange={(input)=>{setStartDate(input)}} date={startDate} maxDate={endDate}/>
      <DatePicker title="תאריך סיום" icon={<FaCalendarAlt/>} onChange={(input)=>{setEndDate(input)}} date={endDate} minDate={startDate}/>
      </>}
      
      </Modal.Body>
      <Modal.Footer>
        {user.status !== 'אורח' && <Button onClick={makeReservation}>הזמן</Button>}
        <Button variant='secondary' onClick={()=>setShow(false)}>סגירה</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RentCarModal;
