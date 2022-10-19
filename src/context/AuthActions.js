export const LoginStart = (emailPassword) => ({
    type: "LOGIN_START",
  });
  
  export const LoginSuccess = (loginInfo) => ({
    type: "LOGIN_SUCCESS",
    payload: loginInfo,
  });
  
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
 