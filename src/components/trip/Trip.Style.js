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
});

export default styles;
