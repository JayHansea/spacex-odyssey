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
  },
  balance: {
    color: COLORS.white,
    marginRight: SIZES.medium,
    fontSize: SIZES.xxLarge,
    marginBottom: SIZES.small,
  },
  buttonContainer: (alignItems) => ({
    alignItems: alignItems,
    marginTop: SIZES.xLarge,
  }),
  button: (width) => ({
    backgroundColor: COLORS.secondary,
    width: width,
    alignItems: "center",
    paddingHorizontal: SIZES.xLarge,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.medium,
  }),
  shadow: {
    ...SHADOWS.medium,
  },
  modalTransparentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    width: SIZES.width,
    height: SIZES.height * 0.45,
    borderTopRightRadius: SIZES.medium,
    borderTopLeftRadius: SIZES.medium,
  },
  closeModalButton: {
    alignItems: "center",
  },
  input: {
    height: 50,
    marginVertical: SIZES.medium,
    padding: 10,
    backgroundColor: COLORS.forInputs,
    borderRadius: SIZES.medium,
  },
  feedback: {
    alignItems: "center",
    marginVertical: 3,
  },
  successMessage: {
    color: COLORS.green,
  },
  errorMessage: {
    color: COLORS.red,
  },
});

export default styles;
