import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import feedReducer from './feedSlice.js';
import connectionReducer from './connection.js'
import friendReducer from './friend.js'
const appStore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connection:connectionReducer,
        friend:friendReducer,
    },
})
export default appStore;