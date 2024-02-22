import React from 'react';

import css from './Header.module.css'
import {useAppContext} from "../../hoc/useAppContext";

const Header = () => {
    const [name,] = useAppContext();

    return (
        <div className={css.Header}>
            {
                name?
                    <h1>{name}</h1>
                    :
                    <h1>Rick and Morty</h1>
            }
        </div>
    );
};

export {Header};