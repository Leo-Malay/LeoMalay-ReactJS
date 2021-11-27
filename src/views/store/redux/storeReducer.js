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
        case "ADD_CART_SUCCESS":
            return {
                ...state,
                isLoading: false,
                cart: action.data.cart,
                totalCost: action.data.totalCost,
                suc: "Added to Cart",
            };
        case "REMOVE_CART_SUCCESS":
            return {
                ...state,
                isLoading: false,
                cart: action.data.cart,
                totalCost: action.data.totalCost,
                suc: "Removed from Cart",
            };
        case "PRODUCT_FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                product: action.data,
            };
        case "PRODUCT_FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                err: "Unable to fetch your Product",
            };
        case "CART_FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                cart: action.data.cart,
                totalCost: action.data.totalCost,
            };
        case "CART_FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                err: "Unable to Fetch your Cart",
            };
        case "ORDER_FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                order: action.data,
            };
        case "ORDER_FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                err: action.data,
            };
        case "ORDER_PLACE_SUCCESS":
            return {
                ...state,
                isLoading: false,
                order_id: action.data,
            };
        case "ORDER_PLACE_FAILURE":
            return {
                ...state,
                isLoading: false,
                err: action.data,
                order_id: undefined,
            };
        case "ORDER_CANCEL_SUCCESS":
            return {
                ...state,
                isLoading: false,
                order_id: action.data,
            };
        case "ORDER_CANCEL_FAILURE":
            return {
                ...state,
                isLoading: false,
                err: action.data,
                order_id: undefined,
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
