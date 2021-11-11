export const authReducer = (
    state = { isLoading: false, isAuthenticated: false },
    action
) => {
    switch (action.type) {
        case "LOGOUT_SUCCESS":
        case "REMOVE_ACCOUNT_SUCCESS":
            return {
                isLoading: false,
                isAuthenticated: false,
                data: {},
            };
        case "LOGOUT_FAILURE":
        case "ACCOUNT_FETCH_FAILURE":
        case "REMOVE_ACCOUNT_FAILURE":
        case "UPDATE_ACCOUNT_SUCCESS":
        case "UPDATE_ACCOUNT_FAILURE":
            return {
                ...state,
                isLoading: false,
            };
        case "ACCOUNT_FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                data: action.data,
            };
        case "LOGIN_SUCCESS":
        case "NEW_ACCOUNT_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
            };
        case "LOGIN_FAILURE":
        case "NEW_ACCOUNT_FAILURE":
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
            };
        case "LOGIN_REQUEST":
        case "LOGOUT_REQUEST":
        case "NEW_ACCOUNT_REQUEST":
        case "ACCOUNT_FETCH_REQUEST":
        case "UPDATE_ACCOUNT_REQUEST":
        case "REMOVE_ACCOUNT_REQUEST":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};
