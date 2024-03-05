import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll:()=>apiService.get(urls.cars.base),
    updateCar:(id, data)=> apiService.put(urls.cars.byId(id), data),
    deleteById:(id)=>apiService.delete(urls.cars.byId(id)),
    createCar:(data)=>apiService.post(urls.cars.base, data),
}

export {
    carService
}