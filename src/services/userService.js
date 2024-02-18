import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService={
    getAll:()=>apiService(urls.users.base),
    getById:(id)=>apiService(urls.users.byId(id))
}

export {
    userService
}