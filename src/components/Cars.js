import React from 'react';
import {Car} from "./Car";

const Cars = ({cars, setCarUpdater, setTrigger}) => {

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car} setCarUpdater={setCarUpdater} setTrigger={setTrigger}/>)}
        </div>
    );
};

export {Cars};