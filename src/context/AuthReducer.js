const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        loginInfo: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        loginInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        loginInfo: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
