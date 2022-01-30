import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
 page:1,
 client:null,
 tab:0,
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
    },
    setTab:(state, action)=>{
      state.tab= action.payload;
    }
  },
 
  
});

export const {
  setPage,
  setClient,
  setTab,
} = counterSlice.actions;


export const selectPage = (state) => state.counter.page;
export const selectClient=(state)=> state.counter.client;
export const selectTab= (state) => state.counter.tab;

export default counterSlice.reducer;
