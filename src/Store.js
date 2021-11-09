import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { blogReducer } from "./views/products/blog/redux/blogReducer";
export default configureStore({
    reducer: combineReducers({
        blog: blogReducer,
    }),
});
