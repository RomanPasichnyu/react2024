import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../store";

const CarForm = () => {
    const {register, reset, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    const save = async (car) => {
        await carService.createCar(car)
        reset()
        dispatch(carsActions.trigger())
    };
    
    const update =  async (car) => {
      await carService.updateCar(carForUpdate.id, car)
        dispatch(carsActions.trigger())
        dispatch(carsActions.setCarForUpdate(null))
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate? 'update' : 'save'}</button>
        </form>
    );
};

export default CarForm;