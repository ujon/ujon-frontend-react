const palette = {
  black: "#333333",
  white: "#f5f5f5",
};

/* 
[abbreviation]
bg: Background
neu: Neumorphic
dash: Dashboard
*/
export const light = {
  colors: {
    bg: "#ebebeb",
    bgShadow: "#bababa",
    bgSecond: "#ededed",
    neuShadowDark: "#c0c0c0",
    neuShadowLight: "#ffffff",
    ...palette,
  },
};

export const dark = {
  colors: {
    bg: "#272727",
    bgShadow: "#a6a6a6",
    neuShadowDark: "#c0c0c0",
    neuShadowLight: "#ffffff",
    ...palette,
  },
};
