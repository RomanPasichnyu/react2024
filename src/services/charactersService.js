import {apiService} from "./apiService";
import {urls} from "../constants";

const charactersService = {
    getAll:(page)=>apiService.get(urls.characters.base, {params:{page}}),
    getById:(ids)=>apiService.get(urls.characters.byId(ids))
}
export {
    charactersService
}