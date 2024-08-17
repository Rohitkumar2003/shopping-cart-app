import { createSlice } from "@reduxjs/toolkit";
const initialState =  {
    value:0,
}
 export const counterSlice = createSlice( {
    name:"Counter",
    initialState,
    reducers: {
        increment : (state)=> {
          state.value += 1;
        },
        decremet :(state)=> {
          state.value -= 1;
        },
    }
})

export const {increment, decremet} = counterSlice.actions;
export default counterSlice.reducer;