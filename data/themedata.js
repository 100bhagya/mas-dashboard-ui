export const getThemeBackgroundColor = (classValue) => {
  classValue = (classValue % 6) + 1;
  switch (classValue) {
    case 1:
      return "bgcolor-one";
    case 2:
      return "bgcolor-two";
    case 3:
      return "bgcolor-three";
    case 4:
      return "bgcolor-four";
    case 5:
      return "bgcolor-five";
    case 6:
      return "bgcolor-six";
    default:
      return "bgcolor-one";
  }
};

export const getThemeTextColor = (classValue) => {
  classValue = (classValue % 6) + 1;
  switch (classValue) {
    case 1:
      return "textcolor-one";
    case 2:
      return "textcolor-two";
    case 3:
      return "textcolor-three";
    case 4:
      return "textcolor-four";
    case 5:
      return "textcolor-five";
    case 6:
      return "textcolor-six";
    default:
      return "textcolor-one";
  }
};

export const getThemeBorderColor = (classValue) => {
  classValue = (classValue % 6) + 1;
  switch (classValue) {
    case 1:
      return "bordercolor-one";
    case 2:
      return "bordercolor-two";
    case 3:
      return "bordercolor-three";
    case 4:
      return "bordercolor-four";
    case 5:
      return "bordercolor-five";
    case 6:
      return "bordercolor-six";
    default:
      return "bordercolor-one";
  }
};

export const getThemeColorHex = (classValue) => {
  classValue = (classValue % 6) + 1;
  switch (classValue) {
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
