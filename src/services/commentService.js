import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService={
    getByPostID:(postId)=>apiService.get(urls.comments.base, {params:{postId}})
}

export {
    commentService
}