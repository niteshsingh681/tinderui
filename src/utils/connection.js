import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: 'connection', // name should be a string
    initialState: null,
    reducers: {
        addConnection: (state, action) => {
            return action.payload;
        },
        removeConnection: (state, action) => {
            return state.filter((friend)=>friend._id!==action.payload);
        }
    }
});

//  Actions are exported from connectionSlice.actions
export const { addConnection, removeConnection } = connectionSlice.actions;

export default connectionSlice.reducer;