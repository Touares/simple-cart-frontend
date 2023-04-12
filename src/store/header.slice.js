import {createSlice} from '@reduxjs/toolkit'


const headerSlice = createSlice({
    name: 'header',
    initialState: {show:false},
    reducers: {
        setShow(state){
            state.show = !state.show
        },
        
    },
})

export const headerActions = headerSlice.actions;
export default headerSlice;