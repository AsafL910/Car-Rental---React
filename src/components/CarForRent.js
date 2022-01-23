import { Card, Container, Col, Row, Button } from "react-bootstrap";
import {useContext, useState} from 'react'
import {UserContext} from '../App.js'
import RentCar from "./RentCar.js";

const CarForRent = ({ car }) => {
  const [rentCar, setRentCar] = useState(false);
  const carModel = car.car;
  const {user} = useContext(UserContext);
  const openOrder = () => {
     user.status === 'אורח'? alert("עליך להתחבר על מנת להזמין רכב"): setRentCar(true) 
  }
  return (
    <>
    <Card
      style={{ margin: 10 }}
      border={car.availability === "זמין" ? "success" : "danger"}
    >
      <Card.Header>{car.availability}</Card.Header>
      <Card.Body>
        <Container>
          <Card.Title>
            {carModel.brand} {carModel.model} {carModel.year}
          </Card.Title>
          <Row>
            <Col>
              <Card.Text>עלות יומית: {carModel.dailyCost}₪</Card.Text>
              <Card.Text>עלות איחור: {carModel.delayCost}₪</Card.Text>
              <Card.Text>קילומטרז': {car.km}</Card.Text>
              <Card.Text>גיר: {carModel.gear}</Card.Text>
              <Card.Text>להשכרה ב{car.branch.name}</Card.Text>
            </Col>
            <Col>
              <Card.Img src={car.image} />
            </Col>
          </Row>
        </Container>
        {car.availability === "זמין" ? (
          <Button className="btn btn-success" onClick={openOrder}>הזמן</Button>
        ) : (
          <Button className="btn btn-danger" disabled>
            לא זמין
          </Button>
        )}
      </Card.Body>
    </Card>
    <RentCar show={rentCar} setShow={(value)=> setRentCar(value)} car={car}/>
    </>
  );
};

export default CarForRent;
