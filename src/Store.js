import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { blogReducer } from "./views/blog/redux/blogReducer";
import { authReducer } from "./views/auth/redux/authReducers";
import { storeReducer } from "./views/store/redux/storeReducer";
export default configureStore({
    reducer: combineReducers({
        blog: blogReducer,
        auth: authReducer,
        store: storeReducer,
    }),
});
