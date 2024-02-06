import React, {useEffect, useState} from 'react';
import {axiosSpaceXService, baseSpacex} from "../../services/axios.service";
import axios, {post} from "axios";
import {Launch} from "../Launch/Launch";
import {launchesService} from "../../services/launches.service";

const LaunchesAll = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches').then(({data})=> {
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