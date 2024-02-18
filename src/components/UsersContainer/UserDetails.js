import React from 'react';

import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name, username, email, address:{street, suite, city, zipcode, geo:{lat, lng}}} = userDetails;
    const navigate = useNavigate();

    return (
        <div>
            <div>id={id}</div>
            <div>name={name}</div>
            <div>username={username}</div>
            <div>email={email}</div>
            <div>street={street}</div>
            <div>suite={suite}</div>
            <div>city={city}</div>
            <div>zipcode={zipcode}</div>
            <div>lat={lat}</div>
            <div>lng={lng}</div>
            <button onClick={()=>navigate('posts')}>Post of current user</button>
            <hr/>
        </div>
    );
};

export {UserDetails};