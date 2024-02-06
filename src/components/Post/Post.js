import React from 'react';

const Post = ({post, getInfo}) => {
    const {id, title} = post;
    

    return (
        <div>
            <div>Post-{id}</div>
            <div>Title:{title}</div>
            <button onClick={()=>getInfo(post)}>Info</button>
        </div>
    );
};

export {Post};