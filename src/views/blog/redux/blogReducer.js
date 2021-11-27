export const blogReducer = (state = {}, action) => {
    switch (action.type) {
        case "BLOG_REQUEST":
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
        case "WRITE_SUCCESS":
        case "WRITE_FAILURE":
        case "LIKE_SUCCESS":
        case "LIKE_FAILURE":
            return {
                ...state,
                isLoading: false,
            };
        case "BLOG_FETCH_SUCCESS":
            return { ...state, blog: action.data, isLoading: false };
        case "BLOG_FETCH_FAILURE":
            return { ...state, blog: {}, isLoading: false };
        default:
            return state;
    }
};
