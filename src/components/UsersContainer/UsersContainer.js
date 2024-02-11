import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";
import {UserFrom} from "./UserFrom";
import {Users} from "./Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);

    return (
        <div>
            <UserFrom setUsers={setUsers} />
            <hr/>
            <Users users={users}/>

        </div>
    );
};

export {UsersContainer};