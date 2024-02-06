import React from 'react';

const PostDetails = ({postInfo}) => {
    const {userId, id, title, body} = postInfo;
    
    return (
        <div>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export {PostDetails};