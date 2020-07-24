import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import {
  textPrimary,
  primary,
  disabledSurface,
  textDisabled,
  secondary,
} from "../utils/colors";

const PrimaryButton = ({
  onPress,
  title,
  disabled = false,
  type = "primary",
}) => {
  const buttonStyle =
    type === "primary" ? styles.primaryCTA : styles.secondaryCTA;
  const buttonTextStyle =
    type === "primary" ? styles.primaryCTAText : styles.secondaryCTAText;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={disabled ? styles.disabledCTA : buttonStyle}
    >
      <Text style={disabled ? styles.disabledCTAText : buttonTextStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const gloabalFont = "LexendDeca";

const styles = StyleSheet.create({
  primaryCTA: {
    padding: 10,
    backgroundColor: primary,
    width: 100,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  primaryCTAText: {
    fontFamily: gloabalFont,
    color: textPrimary,
    textAlign: "center",
  },
  disabledCTA: {
    padding: 10,
    backgroundColor: disabledSurface,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  disabledCTAText: {
    fontFamily: gloabalFont,
    color: textDisabled,
    textAlign: "center",
  },
  secondaryCTA: {
    padding: 10,
    backgroundColor: "transparent",
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: secondary,
  },
  secondaryCTAText: {
    fontFamily: gloabalFont,
    color: secondary,
    textAlign: "center",
  },
});

export default PrimaryButton;
