import axios from "axios";
const url = "http://localhost:8501";

export const Home = () => async (dispatch) => {
    try {
        const res = await axios.get(url + "/Store/Home", {
            withCredentials: true,
        });
        if (res.data.success)
            dispatch({ type: "STORE_HOME_SUCCESS", data: res.data.data });
        else
            dispatch({
                type: "STORE_HOME_FAILURE",
                data: "Unable to fetch data",
            });
    } catch (error) {
        dispatch({ type: "STORE_HOME_FAILURE", data: "Unable to fetch data" });
    }
};
export const Product = (productId) => async (dispatch) => {
    try {
        const res = await axios.get(url + "/Store/Product", {
            params: { productId },
            withCredentials: true,
        });
        if (res.data.success)
            dispatch({ type: "PRODUCT_FETCH_SUCCESS", data: res.data.data[0] });
        else dispatch({ type: "PRODUCT_FETCH_FAILURE" });
    } catch (error) {
        dispatch({ type: "PRODCUT_FETCH_FAILURE" });
    }
};
export const Cart = () => async (dispatch) => {
    try {
        const res = await axios.get(url + "/Store/Cart", {
            withCredentials: true,
        });
        if (res.data.success)
            dispatch({ type: "CART_FETCH_SUCCESS", data: res.data.data });
        else dispatch({ type: "CART_FETCH_FAILURE" });
    } catch (error) {
        dispatch({ type: "CART_FETCH_FAILURE" });
    }
};
export const AddCart =
    (productId, qty = 1) =>
    async (dispatch) => {
        try {
            const res = await axios.post(
                url + "/Store/AddCart",
                { productId, qty },
                { withCredentials: true }
            );
            if (res.data.success)
                dispatch({ type: "CART_SUCCESS", data: res.data.data });
            else dispatch({ type: "CART_UPDATE_FAILURE" });
        } catch (error) {
            dispatch({ type: "CART_UPDATE_FAILURE" });
        }
    };
export const RemoveCart = (productId) => async (dispatch) => {
    try {
        const res = await axios.delete(url + "/Store/RemoveCart", {
            data: { productId },
            withCredentials: true,
        });
        if (res.data.success)
            dispatch({ type: "CART_SUCCESS", data: res.data.data });
        else dispatch({ type: "CART_REMOVE_FAILURE" });
    } catch (error) {
        dispatch({ type: "CART_REMOVE_FAILURE" });
    }
};
export const AddProduct =
    (
        name,
        price,
        image,
        category,
        description,
        specs,
        availableUnit,
        isAvailable
    ) =>
    async (dispatch) => {
        try {
            const res = await axios.post(
                url + "/Store/AddProduct",
                {
                    name,
                    price,
                    image,
                    category,
                    description,
                    specs,
                    availableUnit,
                    isAvailable,
                },
                { withCredentials: true }
            );
            if (res.data.success) dispatch({ type: "_SUCCESS" });
            else dispatch({ type: "_FAILURE" });
        } catch (error) {
            dispatch({ type: "_FAILURE" });
        }
    };
export const UpdateProduct = () => async (dispatch) => {
    try {
        const res = await axios.get(url + "", { withCredentials: true });
        if (res.data.success) dispatch({ type: "_SUCCESS" });
        else dispatch({ type: "_FAILURE" });
    } catch (error) {
        dispatch({ type: "_FAILURE" });
    }
};
export const UpdateProductAvailability = () => async (dispatch) => {
    try {
        const res = await axios.get(url + "", { withCredentials: true });
        if (res.data.success) dispatch({ type: "_SUCCESS" });
        else dispatch({ type: "_FAILURE" });
    } catch (error) {
        dispatch({ type: "_FAILURE" });
    }
};
export const RemoveProduct = () => async (dispatch) => {
    try {
        const res = await axios.get(url + "", { withCredentials: true });
        if (res.data.success) dispatch({ type: "_SUCCESS" });
        else dispatch({ type: "_FAILURE" });
    } catch (error) {
        dispatch({ type: "_FAILURE" });
    }
};
