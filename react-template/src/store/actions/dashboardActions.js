import { createAction } from "@reduxjs/toolkit"
import { ReducerActions } from "../reducers/ReducerActions"


export const incrementCounter = createAction(ReducerActions.INCREMENT, (counter) => {
    return {
        payload: {
            counter
        }
    }
})

export const decrementCounter = createAction(ReducerActions.DECREMENT, (counter) => {
    console.log("Decrement",counter)
    return {
        payload: {
            counter
        }
    }
})