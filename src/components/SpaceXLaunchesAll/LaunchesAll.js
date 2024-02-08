import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axios.service";
import axios, {post} from "axios";
import {Launch} from "../Launch/Launch";


const LaunchesAll = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        axiosService(launches).then(({data})=> {
            const newData = data.filter(value=>value.launch_year!= "2020");

        setLaunches(newData)})
    }, []);

    return (
        <div>
            {launches.map(launch=> <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {LaunchesAll};