import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {post} from "axios";

const commentService = {
    getAll:()=> apiService.get(urls.comments),
    create:(newComment)=> apiService.post(urls.comments, newComment)

}
export {
    commentService
}