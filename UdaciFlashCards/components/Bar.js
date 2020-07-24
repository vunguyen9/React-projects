import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { textSecondary, textPrimary } from "../utils/colors"
import { Ionicons } from '@expo/vector-icons'

export default function Bar({ title, subtitle, onBackPressed }) {
  return (
    <View style={styles.main}>
      <Ionicons name="ios-arrow-round-back" color="black" size={24} onPress={onBackPressed} />
      <View style={{ marginLeft: 20 }}>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
});
