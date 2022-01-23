import { useState, useEffect } from "react";
import CarForRent from "../CarForRent.js";
import { Form as SearchBar, Container, Row, Col, Alert } from "react-bootstrap";

const SearchCarsForRent = () => {
  useEffect(() => {
    const changeCars = async () => {
      const carList = await fetchCars();
      setCars(carList);
      setFilteredCars(carList);
    };
    changeCars();
  }, []);

  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);
  const [selectedProperty, setSelectedProperty] = useState("brand");
  const fetchCars = async () =>
    await (await fetch("http://localhost:5000/availableCars")).json();
  const filterSearch = (input) => {
    setFilteredCars(
      cars.filter((car) =>
        car.car[selectedProperty].toLowerCase().includes(input.toLowerCase())
      )
    );
  };
  return (
    <div style={{ width: 1000, margin: "auto", marginTop: 100 }}>
      <Container>
        <Row>
          <Col md={8}>
            <SearchBar.Control
              type="text"
              placeholder="חפש רכב"
              onInput={(input) => filterSearch(input.target.value)}
            />
          </Col>
          <Col md={4}>
            <SearchBar.Select
              onChange={(input) => setSelectedProperty(input.target.value)}
            >
              {Object.keys(cars.length > 0 && cars[0].car).map(
                (property) =>
                  typeof cars[0].car[property] === "string" && (
                    <option key={property} value={property}>
                      {property}
                    </option>
                  )
              )}
            </SearchBar.Select>
          </Col>
        </Row>
      </Container>
      <Container>
        {filteredCars.length === 0 ? (
          <Alert variant="warning">אין רכבים שתואמים את החיפוש שלך</Alert>
        ) : (
          filteredCars.map((car) => <CarForRent key={car.id} car={car} />)
        )}
      </Container>
    </div>
  );
};

export default SearchCarsForRent;
