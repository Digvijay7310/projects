import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem: (state,action)=>{
           let existItem = state.find((item)=>item.id===action.payload.id)
           if(existItem) {
           return state.map((item)=>(item.id===action.payload.id?{...item, qty:item.qty+1}:item))
           } else {
            state.push(action.payload)
           }
            
        },
          DecreaseItem: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload);
      if (existItem && existItem.qty > 1) {
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      } else {
        // Remove item if qty goes to 0
        return state.filter((item) => item.id !== action.payload);
      }
    },
        RemoveItem: (state, action) => {
            return state.filter((item) => item.id!==action.payload)
        },
        IncrementQty: (state, action) => {
             return state.map((item)=>(item.id===action.payload.id?{...item, qty:item.qty+1}:item))
        }
    }
})

export const {AddItem, RemoveItem, DecreaseItem, IncrementQty} = cartSlice.actions
export default cartSlice.reducer