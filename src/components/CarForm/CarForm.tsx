import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material'

import {
    chooseMake,
    chooseModel,
    chooseYear,
    chooseColor,
    chooseSpeed
} from '../../redux/slices/rootSlice';
import { CarState } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';


interface CarFormProps {
    id?: string;
    data?: CarState
}


export const CarForm = (props:CarFormProps) => {
    const dispatch = useDispatch()
    const store = useStore();
    const { register, handleSubmit } = useForm<CarState>({})

    const onSubmit: SubmitHandler<CarState> = async(data, event) => {
        if (event) event?.preventDefault();

        if (props.id){
            console.log(props.id)
            await serverCalls.update(props.id, data);
            console.log(`Updated vehicle: ${data.make}`);
            window.location.reload()
            if (event) event.currentTarget.reset()
        } else {
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseYear(data.year))
            dispatch(chooseColor(data.color))
            dispatch(chooseSpeed(data.max_speed))

            console.log(store.getState())

            await serverCalls.create(store.getState() as CarState)
            window.location.reload()
            if (event) event.currentTarget.reset()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='make'>Vehicle Make</label>
                    <Input {...register('make')} name='make' placeholder='Vehicle Make' />
                </div>
                <div>
                    <label htmlFor='model'>Vehicle Model</label>
                    <Input {...register('model')} name='model' placeholder='Vehicle Model' />
                </div>
                <div>
                    <label htmlFor='year'>Vehicle Year</label>
                    <Input {...register('year')} name='year' placeholder='Vehicle Year' />
                </div>
                <div>
                    <label htmlFor='color'>Vehicle Color</label>
                    <Input {...register('color')} name='color' placeholder='Vehicle Color' />
                </div>
                <div>
                    <label htmlFor='max_speed'>Vehicle's Max Speed</label>
                    <Input {...register('max_speed')} name='max_speed' placeholder='Make Here' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}