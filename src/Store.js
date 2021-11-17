import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { blogReducer } from "./views/products/blog/redux/blogReducer";
import { authReducer } from "./views/products/auth/redux/authReducers";
import { storeReducer } from "./views/products/store/redux/storeReducer";
export default configureStore({
    reducer: combineReducers({
        blog: blogReducer,
        auth: authReducer,
        store: storeReducer,
    }),
});
