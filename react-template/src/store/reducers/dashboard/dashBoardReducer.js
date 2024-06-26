import { createReducer, current } from "@reduxjs/toolkit";
import { ReducerActions } from "../ReducerActions";
const initialState = {counter:0}

export const dashboardReducer = createReducer(initialState, (builder) =>{
        builder.addCase(ReducerActions.INCREMENT, (state, action)=>{
            console.log('before', current(state))
            return state.counter++
        })
        .addCase(ReducerActions.DECREMENT, (state, action) =>{
            return state.counter--
        })
        .addDefaultCase((state, action) => {})
    }
)