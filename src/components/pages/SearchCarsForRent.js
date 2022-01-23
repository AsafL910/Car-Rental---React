import { useState, useEffect } from "react";
import CarForRent from "../CarForRent.js";
import { Form as SearchBar } from "react-bootstrap";

const SearchCarsForRent = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);
  const [selectedProperty, setSelectedProperty] = useState("model");
  useEffect(() => {
    const changeCars = async () => {
      setCars(await fetchCars());
    };
    changeCars();
  }, []);
  const fetchCars = async () =>
    await (await fetch("http://localhost:5000/availableCars")).json();
  const filterSearch = (input) => {
    setFilteredCars(
      cars.filter((car) => car.car[selectedProperty].toLowerCase().includes(input.toLowerCase()))
    );
  };
  return (
    <div style={{ width: 1000, margin: 100 }}>
      <SearchBar.Control
        type="text"
        placeholder="חפש רכב"
        onInput={(input) => filterSearch(input.target.value)}
      />
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
      {filteredCars.map((car) => (
        <CarForRent key={car.id} car={car} />
      ))}
    </div>
  );
};

export default SearchCarsForRent;
