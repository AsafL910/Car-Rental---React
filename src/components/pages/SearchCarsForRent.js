import { useState, useEffect } from "react";
import CarForRent from '../CarForRent.js'

const SearchCarsForRent = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        const changeCars = async () => {
          setCars(await fetchCars());
        };
        changeCars();
      }, []);
    const fetchCars = async () => await (await fetch("http://localhost:5000/availableCars")).json();
    return (
        <div style={{width: 1000}}>
            {cars.map((car) => <CarForRent key={car.id} car={car}/>)}
        </div>
    )
}

export default SearchCarsForRent
