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
  modalButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.xLarge,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.xSmall,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
  },
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
  modalCentered: {
    alignItems: "center",
    justifyContent: "center",
  },
  closeModalButton: {
    alignItems: "center",
  },
  input: {
    height: 50,
    marginVertical: SIZES.medium,
    padding: SIZES.medium,
    borderWidth: 1,
    borderRadius: SIZES.xSmall,
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
  successText: {
    color: COLORS.secondary,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    padding: SIZES.medium,
  },
  succesModalButton: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.medium,
    width: "50%",
    borderRadius: SIZES.medium,
    alignItems: "center",
    marginVertical: SIZES.medium,
  },
});

export default styles;
