import {axiosBasic} from "./axiox.service";
import {urls} from "../constants/urls";

const postsService = {
    getAllPosts:()=>axiosBasic(urls.posts.base),
    getByID:(id)=>axiosBasic(urls.posts.byId(id))
}

export {
    postsService
}