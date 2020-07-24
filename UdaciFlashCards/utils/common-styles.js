import { StyleSheet } from "react-native";
import {
  surface,
  secondary,
  textSecondary,
  background,
  textPrimary,
} from "./colors";

const font = "LexendDeca";

export const globalStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: background,
    padding: 10,
  },
  title: {
    fontFamily: font,
    fontSize: 20,
    lineHeight: 30,
    color: textPrimary,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: font,
    fontSize: 15,
    lineHeight: 20,
    color: textPrimary,
    marginTop: 20,
  },
  deckItem: {
    backgroundColor: surface,
    padding: 20,
    marginBottom: 15,
    marginTop: 15,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deckInfo: {
    display: "flex",
    flexDirection: "column",
  },
  deckTitle: {
    fontFamily: font,
    fontSize: 20,
    color: textSecondary,
  },
  deckCards: {
    fontFamily: font,
    fontSize: 15,
    textTransform: "uppercase",
    letterSpacing: 5,
    color: secondary,
  },
  inputField: {
    backgroundColor: surface,
    padding: 15,
    fontFamily: font,
    color: textSecondary,
    borderRadius: 10,
    marginBottom: 20
  },
});
