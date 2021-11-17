export const storeReducer = (state = {}, action) => {
    switch (action.type) {
        case "STORE_REQUEST":
            return { ...state, isLoading: true };
        case "STORE_HOME_SUCCESS":
            return {
                ...state,
                isLoading: false,
                home: action.data,
            };
        case "STORE_HOME_FAILURE":
            return {
                ...state,
                isLoading: false,
                err: "Unable to Fetch Data",
            };
        case "CART_SUCCESS":
            return {
                ...state,
                isLoading: false,
                cart: action.data.cart,
                totalCost: action.data.totalCost,
                suc: "Action Successful",
            };
        case "CART_FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                err: "Unable to Fetch your Cart",
            };
        case "CART_UPDATE_FAILURE":
            return {
                ...state,
                isLoading: false,
                err: "Already in Cart",
            };
        case "CART_REMOVAL_FAILURE":
            return {
                ...state,
                isLoading: false,
                err: "Unable to Remove Item from Cart",
            };
        case "STORE_ERRSUC_CLEAR":
            return { ...state, err: undefined, suc: undefined };
        default:
            return state;
    }
};
