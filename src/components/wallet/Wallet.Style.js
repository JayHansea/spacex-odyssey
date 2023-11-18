import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    marginVertical: SIZES.medium,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
  },
  walletInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.xLarge,
  },
  balance: {
    color: COLORS.white,
    marginRight: SIZES.medium,
    fontSize: SIZES.xxLarge,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: COLORS.secondary,
    width: "40%",
    alignItems: "center",
    paddingHorizontal: SIZES.xLarge,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
  },
});

export default styles;
