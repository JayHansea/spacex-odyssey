import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  header: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginVertical: SIZES.medium,
  },
  selectView: {
    marginVertical: SIZES.small,
  },
  fareView: {
    marginVertical: SIZES.small,
    alignItems: "center",
  },
  fare: {
    fontSize: SIZES.xLarge,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    width: "100%",
    borderRadius: SIZES.medium,
    alignItems: "center",
    marginVertical: SIZES.medium,
  },
  buttonText: {
    color: COLORS.white,
  },
  noteView: {
    marginVertical: SIZES.xSmall,
  },
  note: {
    fontSize: SIZES.small,
    fontStyle: "italic",
  },
  insufficient: {
    color: COLORS.red,
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
  successText: {
    color: COLORS.secondary,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    padding: SIZES.medium,
  },
  modalButton: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.medium,
    width: "50%",
    borderRadius: SIZES.medium,
    alignItems: "center",
    marginVertical: SIZES.medium,
  },
  modalButtonText: {},
});

export default styles;
