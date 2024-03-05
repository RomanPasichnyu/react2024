import React, {useEffect} from 'react';
import {carService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../store";
import Car from "./Car";

const Cars = () => {

    const {cars, trigger} = useSelector(state => state.cars);

    const dispatch = useDispatch()

    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carsActions.setResponce(data)))
    }, [trigger, dispatch]);

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;