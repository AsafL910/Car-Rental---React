import { Card, Container, Col, Row, Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../App.js";
import RentCarModal from "./RentCarModal.js";

const CarForRent = ({ car }) => {
  const [rentCar, setRentCar] = useState(false);
  const carModel = car.car;
  const { user } = useContext(UserContext);
  const handleLocalStorage = (input) => {
    input
      ? localStorage.setItem(
          "favoriteCars",
          JSON.stringify([...(JSON.parse(localStorage.getItem("favoriteCars")) || []), car.id])
        )
      : localStorage.setItem(
          "favoriteCars",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("favoriteCars")).filter(
              (currCar) => currCar !== car.id
            ),
          ])
        );
        console.log(JSON.parse(localStorage.getItem("favoriteCars")))
  };
  return (
    <>
      <Card
        style={{ margin: 10 }}
        border={car.availability === "זמין" ? "success" : "danger"}
      >
        <Card.Header>
          {car.availability}
          <Form.Check
            style={{ float: "left" }}
            defaultChecked={car.isFavorite}
            onChange={(input) => handleLocalStorage(input.target.checked)}
          />
        </Card.Header>
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
            <Button variant="success" onClick={() => setRentCar(true)}>
              הזמן
            </Button>
          ) : (
            <Button variant="danger" disabled>
              לא זמין
            </Button>
          )}
        </Card.Body>
      </Card>
      <RentCarModal
        show={rentCar}
        setShow={(value) => setRentCar(value)}
        car={car}
      />
    </>
  );
};

export default CarForRent;
