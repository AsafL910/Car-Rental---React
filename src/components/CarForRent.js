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
              <Card.Text>
                {" "}
                <p>עלות יומית: {carModel.dailyCost}₪</p>
                <p>עלות איחור: {carModel.dailyCost}₪</p>
                <p>קילומטרז': {car.km}</p>
                <p>גיר: {carModel.gear}</p>
                <p>להשכרה ב{car.branch.name}</p>
              </Card.Text>
            </Col>
            <Col>
              <Card.Img src={car.image} />
            </Col>
          </Row>
        </Container>
        {car.availability === "זמין" ? (
          <Button class="btn btn-success">הזמן</Button>
        ) : (
          <Button class="btn btn-danger" disabled>
            לא זמין
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default CarForRent;
