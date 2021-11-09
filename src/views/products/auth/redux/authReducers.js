export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                isLoading: false,
                isAuthenticated: true,
                data: action.data,
            };
        case "LOGIN_FAILURE":
            return {
                isLoading: false,
                isAuthenticated: false,
                data: action.data,
            };
        case "LOGIN_REQUEST":
            return {
                isLoading: true,
                isAuthenticated: false,
                data: [],
            };
        default:
            return state;
    }
};
