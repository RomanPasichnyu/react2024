import React from 'react';

const User = ({user}) => {
    let {id, name, username, email, address : {street}} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>street:{street}</div>
        </div>
    );
};

export {User};