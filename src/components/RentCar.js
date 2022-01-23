import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../App";

const RentCar = ({ show, setShow, car }) => {
  const { user } = useContext(UserContext);

  const makeReservation = async () => {
    setShow(false);

    await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({
        startDate: "4/6/2021",
        endDate: "5/6/2021",
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
        <Button onClick={makeReservation}>הזמן</Button>
      </Modal.Body>
    </Modal>
  );
};

export default RentCar;
