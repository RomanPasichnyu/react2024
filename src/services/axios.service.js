import {baseSpacex} from "../constant/urls";
import axios from "axios";
let axiosSpaceXService = axios.create({baseURL: baseSpacex})

export {baseSpacex}