import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";
import axios, {post} from "axios";
import {axiosBasic} from "../../services/axiox.service";
import {urls} from "../../constants/urls";
import {postsService} from "../../services/posts.service";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    let [postInfo, setPostInfo] = useState(null);

    useEffect(() => {
        postsService.getAllPosts().then(({data}) => setPosts(data))
    }, []);

    const getInfo = (post)=>{
        console.log(post)
        setPostInfo(post)
    }

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post} getInfo={getInfo}/>)}
            <hr/>
            {postInfo!== null && <PostDetails postInfo={postInfo}/>}

        </div>
    );
};

export {Posts};