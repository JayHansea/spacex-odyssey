import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#6A0DAD",
  secondary: "#00F0A8",
  // tertiary: "#c0b000",
  forInputs: "#6A0DAD11",

  green: "#008000",
  red: "#EC1717",

  lightGray: "#F1F1F1",
  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#ffffff",
  lightWhite: "#FAFAFC",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  width,
  height,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
