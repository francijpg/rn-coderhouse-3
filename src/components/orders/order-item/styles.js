import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail: {},
  detailTotal: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
  },
});
