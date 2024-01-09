import { createSlice } from "@reduxjs/toolkit";


// const initailstate = {
//      show : true
// }

const counterSlice = createSlice({
    name:"counter",
    initialState: false,    
    reducers : {
        setShow: state => !state
    }
})


export const { setShow } = counterSlice.actions;
export default counterSlice.reducer;
