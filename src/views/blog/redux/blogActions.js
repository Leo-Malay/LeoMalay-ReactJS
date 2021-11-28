import axios from "axios";
import { url } from "../../../config/url.config";

export const Home = () => async (dispatch) => {
    dispatch({ type: "BLOG_REQUEST" });
    const res = await axios.get(url + "/Blog/Home", { withCredentials: true });
    if (res.data.success)
        dispatch({ type: "GET_HOME_SUCCESS", data: res.data.data });
    else dispatch({ type: "GET_HOME_FAILURE" });
};
export const Blog = (id) => async (dispatch) => {
    dispatch({ type: "BLOG_REQUEST" });
    const res = await axios.get(
        url + "/Blog/Blog",
        { id },
        { withCredentials: true }
    );
    if (res.data.success)
        dispatch({ type: "BLOG_FETCH_SUCCESS", data: res.data.data[0] });
    else dispatch({ type: "BLOG_FETCH_FAILURE", data: {} });
};
export const Write =
    (thumbnail, title, category, author, description) => async (dispatch) => {
        dispatch({ type: "BLOG_REQUEST" });
        const res = await axios.post(
            url + "/Blog/AddBlog",
            { thumbnail, title, category, author, description },
            {
                withCredentials: true,
            }
        );
        if (res.data.success) {
            dispatch({ type: "WRITE_SUCCESS" });
            dispatch(Home());
        } else dispatch({ type: "WRITE_FAILURE" });
    };
export const Like = (remove, blogId) => async (dispatch) => {
    dispatch({ type: "BLOG_REQUEST" });
    const res = await axios.put(
        url + "/Blog/LikeBlog",
        { remove, blogId },
        { withCredentials: true }
    );
    if (res.data.success) dispatch({ type: "LIKE_SUCCESS" });
    else dispatch({ type: "LIKE_FAILURE" });
};
