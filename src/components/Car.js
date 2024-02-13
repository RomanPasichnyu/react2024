import React from 'react';
import {carService} from "../services/carService";

const Car = ({car,setCarUpdater, setTrigger}) => {
    const {id, brand, price, year} = car;

    const deleteCar = () => {
        carService.deleteById(id)
        setTrigger(prev=>!prev)
    }

    return (
        <div>
            <div>id-{id}</div>
            <div>brand-{brand}</div>
            <div>price-{price}</div>
            <div>year-{year}</div>
            <button onClick={()=>setCarUpdater(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};