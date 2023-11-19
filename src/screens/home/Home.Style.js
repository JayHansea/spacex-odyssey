import { StyleSheet, StatusBar } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  safeContainer: {
    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: SIZES.large,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    backgroundColor: COLORS.white,
  },
  textContainer: {
    alignItems: "center",
  },
  brandName: {
    fontSize: SIZES.large,
    marginTop: SIZES.large,
    fontWeight: "bold",
  },
});

export default styles;
