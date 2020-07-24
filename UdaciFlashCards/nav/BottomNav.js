import { surface, primary, textPrimary } from "../utils/colors"
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import React from "react"
import Home from "../components/Home"
import AddDeck from "../components/AddDeck"

const Tab = createMaterialBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator
      activeColor={primary}
      inactiveColor={textPrimary}
      barStyle={{ backgroundColor: surface }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={24} />
          ),
        }}
        name="decklist"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Add Deck",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-add" color={color} size={24} />
          ),
        }}
        name="adddeck"
        component={AddDeck}
      />
    </Tab.Navigator>
  )
}
