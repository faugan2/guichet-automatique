import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
 page:1,
 client:null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
  
    setPage: (state, action) => {
      state.page= action.payload;
    },
    setClient:(state,action)=>{
      state.client= action.payload;
    }
  },
 
  
});

export const {
  setPage,
  setClient
} = counterSlice.actions;


export const selectPage = (state) => state.counter.page;
export const selectClient=(state)=> state.counter.client;


export default counterSlice.reducer;
