/* jshint esversion: 6 */
import { StyleSheet } from "react-native";
import { myStyle } from "../../../_styles/myStyle";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: myStyle.backgroundDark
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",    
    color: myStyle.textColor,
    fontFamily: myStyle.subTitleFontFamily
  }
});
