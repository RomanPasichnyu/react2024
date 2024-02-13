import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {options} from "joi";
import {carService} from "../services/carService";
import {apiService} from "../services/apiService";

const CarForm = ({setTrigger, carUpdater, setCarUpdater}) => {
    const {
        reset,
        register,
        handleSubmit,
        formState:{isValid, errors},
        setValue} = useForm({mode:'all'});

    useEffect(() => {
        if (carUpdater){
            setValue('brand', carUpdater.brand,{shouldValidate:true})
            setValue('price', carUpdater.price,{shouldValidate:true})
            setValue('year', carUpdater.year,{shouldValidate:true})

        }
    }, [carUpdater]);
    const save = (car)=>{
        carService.create(car)
        setTrigger(prev=>!prev)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'brand'} {...register('brand', {
                pattern: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/
            })}/>
            <input type='text' placeholder={'price'} {...register('price', {
                valueAsNumber:true,
                min:0,
                max: 1000000
            })}/>
            <input type='text' placeholder={'year'} {...register('year', {
                valueAsNumber:true,
                min: 1990,
                max: 2024
            })}/>
            <button disabled={!isValid}>Submit and create</button>
        </form>
    );
};

export {CarForm};