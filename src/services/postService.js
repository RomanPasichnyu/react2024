import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService ={
    getByID:(id)=>apiService.get(urls.posts.byId(id))
}
export {
    postService
}