export const getThemeBackgroundColor = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "bgcolor-one";
    case 2:
      return "bgcolor-two";
    default:
      return "bgcolor-one";
  }
};

export const getThemeBLightBackgroundColor = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "light-bgcolor-one";
    case 2:
      return "light-bgcolor-two";
    default:
      return "light-bgcolor-one";
  }
};

export const getThemeTextColor = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "textcolor-one";
    case 2:
      return "textcolor-two";
    default:
      return "textcolor-one";
  }
};
export const getThemeTextPrimaryColor = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "textcolor-primary-one";
    case 2:
      return "textcolor-primary-two";
    default:
      return "textcolor-primary-one";
  }
};
export const getThemeHoverPrimaryBgColor = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "hover-bg-color-primary-one";
    case 2:
      return "hover-bg-color-primary-two";
    default:
      return "hover-bg-color-primary-one";
  }
};
export const getThemeTextSecondaryColor = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "textcolor-secondary-one";
    case 2:
      return "textcolor-secondary-two";
    default:
      return "textcolor-secondary-one";
  }
};

export const getThemeLightTextColor = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "light-textcolor-one";
    case 2:
      return "light-textcolor-two";
    default:
      return "light-textcolor-one";
  }
};

export const getThemeWhiteDarkBGColor = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "white-dark-bgcolor-one";
    case 2:
      return "white-dark-bgcolor-two";
    default:
      return "white-dark-bgcolor-one";
  }
};

export const getThemeBorderColor = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "bordercolor-one";
    case 2:
      return "bordercolor-two";
    default:
      return "bordercolor-one";
  }
};

export const getThemeColorHex = (value) => {
  value = (value % 2) + 1;
  switch (value) {
    case 1:
      return "#1b70c4";
    case 2:
      return "#FFFFFF";
    default:
      return "#1b70c4";
  }
};

export const getText = (value) => {
  value = (value % 4) + 1;
  switch (value) {
    case 1:
      return "text-one";
    case 2:
      return "text-two";
    case 3:
      return "text-three";
    case 4:
      return "text-four";
    default:
      return "text-one";
  }
};
