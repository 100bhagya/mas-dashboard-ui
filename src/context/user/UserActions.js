export const SetProfileImage = (profileImgURL) => ({
    type: "SET_PROFILE_IMAGE",
    payload: profileImgURL,
  });
  
  export const resetProfileImage = () => ({
    type: "RESET_PROFILE_IMAGE",
  });