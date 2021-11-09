export const blogReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_HOME_REQUEST_START":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_HOME_SUCCESS":
            return {
                ...state,
                isLoading: false,
                data: action.data,
            };
        case "GET_HOME_FAILURE":
            return {
                ...state,
                isLoading: false,
                data: [],
            };
        default:
            return state;
    }
};
