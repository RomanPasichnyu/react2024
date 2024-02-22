import React from 'react';
import {createContext, useState} from "react";

const Context = createContext(null)


const ContextProvider = ({children}) => {
    const state = useState(null)
    return (
        <div>
            <ContextProvider value={state}>
                {children}
            </ContextProvider>
        </div>
    );
};

export {Context, ContextProvider};
