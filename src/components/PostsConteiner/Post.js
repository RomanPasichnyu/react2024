import React from 'react';

import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id,title} = post;
    return (
        <div>
            <div>title-{title}</div>
            <button onClick={()=>navigate(`/posts/${id}`)}>Post details</button>
        </div>
    );
};

export {Post};