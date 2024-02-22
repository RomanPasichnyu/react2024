import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const episodesService = {
    getAll:(page)=>apiService.get(urls.episodes.base, {params:{page}})
}
export {
    episodesService
}