import {apiService} from "./apiService";

import {urls} from "../constants/urls";


const carService= {
    getAll:()=> apiService.get(urls.cars.base),
    create:(newCar)=>apiService.post(urls.cars.base, newCar),
    updateById:(id, newCar)=>apiService.put(urls.cars.byId(id), newCar),
    deleteById:(id)=>apiService.delete(urls.cars.byId(id))
}

export {
    carService
}