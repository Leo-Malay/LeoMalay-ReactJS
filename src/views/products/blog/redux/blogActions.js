import axios from "axios";
const url = "http://localhost:8501";

export const Home = () => async (dispatch) => {
    dispatch({ type: "GET_HOME_REQUEST" });
    const res = await axios.get(url + "/Blog/Home", { withCredentials: true });
    if (res.data.success)
        dispatch({ type: "GET_HOME_SUCCESS", data: res.data.data });
    else dispatch({ type: "GET_HOME_FAILURE" });
};
export const Blog = async () => {
    const res = await axios.get(url + "/Blog/Blog", { withCredentials: true });
    if (res.data.success) return res.data.data;
    else return [];
};
export const Write =
    (thumbnail, title, category, author, description) => async (dispatch) => {
        dispatch({ type: "WRITE_REQUEST" });
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
