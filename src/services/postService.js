import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService ={
    getByUserID:(userId)=> apiService(urls.posts.base, {params:{userId}}),
    byId:(id)=> apiService(urls.posts.byId(id))
}

export {
    postService
}