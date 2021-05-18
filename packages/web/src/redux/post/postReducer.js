import * as postTypes from "./postTypes";

export const postInitialState = {
  isLoaded: false,
  isLoading: false,
  error: null,
  posts: [],
};

const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case postTypes.UPLOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case postTypes.UPLOAD_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case postTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        posts: [...state.posts, action.payload],
      };

    case postTypes.FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case postTypes.FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case postTypes.FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        posts: action.payload,
      };
    }
    case postTypes.RESET_POST_STATE: {
      return {
        ...postInitialState,
      };
    }
    default:
      return state;
  }
};

export default postReducer;
