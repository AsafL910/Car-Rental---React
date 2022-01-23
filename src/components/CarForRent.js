import { Card, Container, Col, Row, Button } from "react-bootstrap";

const CarForRent = ({ car }) => {
  const carModel = car.car;
  return (
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
          <Button className="btn btn-success">הזמן</Button>
        ) : (
          <Button className="btn btn-danger" disabled>
            לא זמין
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default CarForRent;
