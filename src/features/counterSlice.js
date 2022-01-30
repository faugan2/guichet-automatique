import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
 page:1,
 client:null,
 tab:0,
 me:null,
 loading:false,
 mouvements:[],
 search:"",
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
    },
    setMe:(state, action)=>{
      state.me= action.payload;
    },
    setLoading:(state, action)=>{
      state.loading= action.payload;
    },
    setMouvements:(state, action)=>{
      state.mouvements= action.payload;
    },
    setSearch:(state, action)=>{
      state.search= action.payload;
    }
  },
 
  
});

export const {
  setPage,
  setClient,
  setTab,
  setMe,
  setLoading,
  setMouvements,
  setSearch,
} = counterSlice.actions;


export const selectPage = (state) => state.counter.page;
export const selectClient=(state)=> state.counter.client;
export const selectTab= (state) => state.counter.tab;
export const selectMe=(state)=> state.counter.me;
export const selectLoading= (state) => state.counter.loading;
export const selectMouvements= (state) => state.counter.mouvements;
export const selectSearch= (state) => state.counter.search;

export default counterSlice.reducer;
