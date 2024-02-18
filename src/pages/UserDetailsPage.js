import React, {useEffect, useState} from 'react';

import {Outlet, useParams} from "react-router-dom";
import {userService} from "../services/userService";
import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {id}= useParams();
    useEffect(() => {
        userService.getById(id).then(({data})=>setUserDetails(data))
    }, [id]);

    return (
        <div>
            {userDetails&&<UserDetails userDetails={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};