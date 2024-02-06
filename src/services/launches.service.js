import {baseSpacex} from "./axios.service";
import {launches, url} from "../constant/urls";

const launchesService = {
    getAll:()=>baseSpacex.get(launches)
}

export {launchesService}