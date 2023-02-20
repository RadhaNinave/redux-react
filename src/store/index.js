/*
import {createStore} from 'redux';
import counterSlice from '../components/Counter';
import { configureStore,createSlice } from '@reduxjs/toolkit';
const counterReducer=(state = {counter:0}, action)=>{
         if(action.type === "increment"){
           return{
            counter : state.counter+1,
            
          }
        }
        if(action.type === "incrementBy5"){
          return{
           counter : state.counter+5,
           
         }
       }
    
      
    
        if(action.type === "decrement"){
            return{
              counter : state.counter-1,
              
            }
          }
          if(action.type === "decrementBy5"){
            return{
              counter : state.counter-5,
              
            }
          }
        
        if(action.type==='toggle'){
            return{
               counter : state.counter,
                
            }
       }  
    
          return state
 }
 const store = createStore(counterReducer); 

 export default store;*/
 import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});


const store = configureStore({
  reducer: counterSlice.reducer
});
export const counterActions=counterSlice.actions;
export default store;