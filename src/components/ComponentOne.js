import React from 'react';
import {useDispatch} from "react-redux";
import {counterActions} from "../redux/slices/countedSlice";

const ComponentOne = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(counterActions.inc())}>Incr</button>
            <button onClick={()=>dispatch(counterActions.dec())}>Decr</button>
            <button onClick={()=> dispatch(counterActions.reset())}>Reset</button>
        </div>
    );
};

export default ComponentOne;