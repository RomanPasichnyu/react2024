import React from 'react';
import {Outlet} from "react-router-dom";
import {Comments} from "../components/CommentsConteiner/Comments";

const CommentsPage = () => {
    return (
        <div>

            <Outlet/>
            <Comments/>
        </div>
    );
};

export {CommentsPage};