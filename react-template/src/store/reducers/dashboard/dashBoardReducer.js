import { createSlice } from '@reduxjs/toolkit';
import { incrementAction, decrementAction, incrementByAmountAction } from '../actions/dashboardActions';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incrementAction,
    decrementAction,
    incrementByAmountAction
  },
});

// Export the actions generated by createSlice
export const { incrementAction: increment, decrementAction: decrement, incrementByAmountAction: incrementByAmount } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;