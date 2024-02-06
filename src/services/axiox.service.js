import axios from "axios";
import {baseURL} from "../constants/urls";

let axiosBasic = axios.create({baseURL});

export {axiosBasic}