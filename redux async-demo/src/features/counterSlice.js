import { createSlice } from "@reduxjs/toolkit";

// step -3 create Sclice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },

  // redux will internally create this
  // actions: {
  //     increment: () => {
  //         return {type: 'counter/increment'}
  //     },
  //     decrement: () => {
  //         return {type: 'counter/decrement'}
  //     },
  //     incrementByAmount: () => {
  //         return {type: 'counter/incrementByAmount', payload: x}
  //     }
  // }
});

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
