import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { surface } from "../utils/colors";

export default function ActionView({ iconName, title, onPressed}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity  onPress={onPressed}>
        <Ionicons name={iconName} size={24} color="black" />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = () =>
  StyleSheet.create({
    
    title: {
      color: "black",
      fontFamily: "LexendDeca",
      fontSize: 25,
      marginLeft: 15,
    },
  })
