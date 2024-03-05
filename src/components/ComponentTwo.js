import React from 'react';
import {useDispatch} from "react-redux";
import {counter2Actions} from "../redux/slices/counter2Slice";

const ComponentTwo = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(counter2Actions.inc())}>Incr2</button>
            <button onClick={()=>dispatch(counter2Actions.dec())}>Decr2</button>
            <button onClick={()=>dispatch(counter2Actions.reset(444))}>Reset2</button>
        </div>
    );
};

export default ComponentTwo;