import { createSlice } from "@reduxjs/toolkit";
const friendSlice=createSlice({
     name:"friend",
     initialState:[],
     reducers:{
        addFriend:(state,action)=>{
            return action.payload;
        },
        removeFriend:(state,action)=>{
            return state.filter((friend)=>friend._id!==action.payload);
        }
     }
});
export  const{addFriend,removeFriend}=friendSlice.actions;
export default friendSlice.reducer;