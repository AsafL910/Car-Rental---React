import { useState, useEffect } from "react";
import CarForRent from "../CarForRent.js";
import { Form as SearchBar, Container, Row, Col, Alert, Spinner } from "react-bootstrap";

const SearchCarsForRent = () => {
  useEffect(() => {
    const changeCars = async () => {
      setIsLoading(true)
      const carList = await fetchCars();
      const favCars =JSON.parse(localStorage.getItem("favoriteCars"));
      const modifiedCars = carList.map(car => Object.assign(car, {isFavorite: favCars.some((favCar) => favCar === car.id)}));
      const sortedCars = modifiedCars.sort((firstCar, secondCar) => firstCar.isFavorite? -1 : 1)
      setCars(sortedCars);
      setFilteredCars(sortedCars);
      setIsLoading(false)
    };
    changeCars();
  }, []);
  const [isLoading, setIsLoading] = useState(false)
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
        {isLoading ? <Spinner style={{position: "fixed", top: "50%", left: "50%"}}animation="border"/> :  (filteredCars.length === 0 ? (
          <Alert variant="warning">אין רכבים שתואמים את החיפוש שלך</Alert>
        ) : (
          filteredCars.map((car) => <CarForRent key={car.id} car={car} isFavorite={car.isFavorite}/>)
        ))}
        
      </Container>
    </div>
  );
};

export default SearchCarsForRent;
