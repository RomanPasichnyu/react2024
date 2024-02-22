import React from 'react';

import css from './Header.module.css'
import {useAppContext} from "../../hoc/useAppContext";

const Header = () => {

    return (
        <div className={css.Header}>
            <h1>Rick and Morty</h1>
        </div>
    );
};

export {Header};