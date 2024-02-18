import React, {useEffect, useState} from 'react';

import {postService} from "../services/postService";
import {useParams} from "react-router-dom";
import {PostDetails} from "../components/PostsConteiner/PostDetails";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        postService.byId(id).then(({data})=>setPostDetails(data))
    }, [id]);
    
    return (
        <div>
            {postDetails&& <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {PostDetailsPage};