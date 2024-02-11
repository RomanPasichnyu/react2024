import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UserFrom = ({setUsers}) => {
    let {reset, register, handleSubmit} = useForm();
    const save = (newUser) => {
        userService.create(newUser).then(({data})=> setUsers(prev=>[...prev, data]))

    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'id'} {...register('id')} />
            <input type="text" placeholder={'name'} {...register('name')} />
            <input type="text" placeholder={'username'} {...register('username')} />
            <input type="text" placeholder={'email'} {...register('email')} />
            <input type="text" placeholder={'address'} {...register('address.street')} />
            <button>Submit</button>
        </form>
    );
};

export {UserFrom};