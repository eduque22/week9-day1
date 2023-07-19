import { createSlice } from '@reduxjs/toolkit';



export interface CarState {
    make: string;
    model: string;
    year: number;
    color: string;
    max_speed: string;
}

const initialState: CarState = {
    make: 'Vehicle Make',
    model: '',
    year: 0,
    color: '',
    max_speed: ''
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseColor: (state, action) => { state.color, action.payload },
        chooseSpeed: (state, action) => { state.max_speed = action.payload }
    }
})


export const reducer = rootSlice.reducer
console.log(rootSlice)

export const {
    chooseMake,
    chooseModel,
    chooseYear,
    chooseColor,
    chooseSpeed
} = rootSlice.actions