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
export const logout = () => async (dispatch) => {
    dispatch({ type: "LOGOUT_REQUEST" });
    try {
        const res = await axios.get(url + "/Auth/Logout", {
            withCredentials: true,
        });

        if (res.data.success) dispatch({ type: "LOGOUT_SUCCESS" });
        else dispatch({ type: "LOGOUT_FAILURE" });
    } catch (error) {
        console.log(error);
    }
};
export const newAccount =
    (fname, lname, email, username, password) => async (dispatch) => {
        dispatch({ type: "NEW_ACCOUNT_REQUEST" });
        try {
            const res = await axios.post(
                url + "/Auth/NewAccount",
                { fname, lname, email, username, password },
                {
                    withCredentials: true,
                }
            );

            if (res.data.success)
                dispatch({ type: "NEW_ACCOUNT_SUCCESS", data: res.data.data });
            else dispatch({ type: "NEW_ACCOUNT_FAILURE", data: {} });
        } catch (error) {
            console.log(error);
        }
    };
export const account = () => async (dispatch) => {
    dispatch({ type: "ACCOUNT_FETCH_REQUEST" });
    try {
        const res = await axios.get(url + "/Auth/Account", {
            withCredentials: true,
        });

        if (res.data.success)
            dispatch({ type: "ACCOUNT_FETCH_SUCCESS", data: res.data.data });
        else dispatch({ type: "ACCOUNT_FETCH_FAILURE", data: {} });
    } catch (error) {
        console.log(error);
    }
};
export const updateAccount =
    (al1, al2, city, state, country, pincode) => async (dispatch) => {
        dispatch({ type: "UPDATE_ACCOUNT_REQUEST" });
        try {
            const res = await axios.put(
                url + "/Auth/UpdateAccount",
                { al1, al2, city, state, country, pincode },
                {
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                dispatch(account());
                dispatch({
                    type: "UPDATE_ACCOUNT_SUCCESS",
                });
            } else dispatch({ type: "UPDATE_ACCOUNT_FAILURE" });
        } catch (error) {
            console.log(error);
        }
    };
export const removeAccount = (password) => async (dispatch) => {
    dispatch({ type: "REMOVE_ACCOUNT_REQUEST" });
    try {
        const res = await axios.delete(
            url + "/Auth/RemoveAccount",
            { password },
            {
                withCredentials: true,
            }
        );
        if (res.data.success) dispatch({ type: "REMOVE_ACCOUNT_SUCCESS" });
        else dispatch({ type: "REMOVE_ACCOUNT_FAILURE" });
    } catch (error) {
        console.log(error);
    }
};
