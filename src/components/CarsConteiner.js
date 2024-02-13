import React, {useEffect, useState} from 'react';
import {carService} from "../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsConteiner = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)

    const [carUpdater, setCarUpdater] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger} carUpdater={carUpdater} setCarUpdater={setCarUpdater}/>
            <hr/>
            <Cars cars={cars} setCarUpdater={setCarUpdater} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsConteiner};