import { createContext, useEffect, useReducer } from "react";
import UserReducer from "./UserReducer";

const INITIAL_STATE = {
  profileImgURL: null,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem(
      "user-profile-img-url",
      JSON.stringify(state.profileImgURL)
    );
  }, [state.profileImgURL]);

  return (
    <UserContext.Provider
      value={{
        profileImgURL: state.profileImgURL,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};