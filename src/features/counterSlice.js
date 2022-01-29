import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
 page:1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
  
    setPage: (state, action) => {
      state.page= action.payload;
    },
  },
 
  
});

export const { setPage} = counterSlice.actions;


export const selectPage = (state) => state.counter.page;



export default counterSlice.reducer;
