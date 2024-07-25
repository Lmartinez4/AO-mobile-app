import { StyleSheet } from "react-native";

import colors from "../constants/colors";
import fonts from "../constants/fonts";

export default StyleSheet.create({
  header: {
    backgroundColor: colors.headerBackgound,
    height: 100,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  title: {
    color: colors.headerText,
    fontSize: fonts.headerSize
  },
  subtitle: {
    fontSize: fonts.subHeaderSize,
    color: colors.primaryText,
    padding: 10
  },
  container: {
    backgroundColor: colors.containerBackground
  }
});
