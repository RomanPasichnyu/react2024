import React from 'react';
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import {useSelector} from "react-redux";

const App = () => {
    const {count} = useSelector(state => state.counter1);
    const {count:count2} = useSelector(state => state.counter2);

    return (
        <div>
            count:{count}
            count2:{count2}
            <ComponentOne/>
            <ComponentTwo/>
        </div>
    );
};

export {App};