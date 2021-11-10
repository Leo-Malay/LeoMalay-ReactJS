import axios from "axios";
const url = "http://localhost:8501";

export const login = (username, password) => async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
        const res = await axios.post(
            url + "/Auth/Login",
            { username, password },
            {
                withCredentials: true,
            }
        );
        if (res.data.success) dispatch({ type: "LOGIN_SUCCESS" });
        else dispatch({ type: "LOGIN_FAILURE" });
    } catch (error) {
        console.log(error);
    }
};
export const logout = () => async (dispatch) => {};
export const newAccount = () => async (dispatch) => {};
export const account = () => async (dispatch) => {};
export const updateAccount = () => async (dispatch) => {};
export const removeAccount = () => async (dispatch) => {};
