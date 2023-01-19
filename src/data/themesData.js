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
  value = (value % 6) + 1;
  switch (value) {
    case 1:
      return "#7360ff";
    case 2:
      return "#FF6C6C";
    case 3:
      return "#FFB36C";
    case 4:
      return "#6C8DFF";
    case 5:
      return "#6CCAFF";
    case 6:
      return "#A46CFF";
    default:
      return "#7360ff";
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
