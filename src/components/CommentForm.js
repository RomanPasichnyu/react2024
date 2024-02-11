import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../services/commentService";

const CommentForm = ({setComments}) => {
    const {reset, register,handleSubmit } = useForm();
    const save = (newComment)=>{
        commentService.create(newComment).then(({data})=> setComments(prev=>[...prev, data]))

    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Submit</button>
        </form>
    );
};

export {CommentForm};