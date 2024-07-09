import { createSlice } from '@reduxjs/toolkit';
import { increment, decrement, incrementByAmount } from '../actions/dashboardActions';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment,
    decrement,
    incrementByAmount
  },
});

// Export the actions generated by createSlice
export const { increment: incrementAction, decrement: decrementAction, incrementByAmount: incrementByAmountAction } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;