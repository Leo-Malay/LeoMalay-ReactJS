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
