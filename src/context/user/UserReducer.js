const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROFILE_IMAGE":
      return {
        profileImgURL: action.payload,
      };
    case "RESET_PROFILE_IMAGE":
      return {
        profileImgURL: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
