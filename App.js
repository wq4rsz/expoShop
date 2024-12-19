import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductsScreen from "./screens/ScreenProducts";
import CartScreen from "./screens/ScreenCart";
import { Ionicons } from "@expo/vector-icons";
import { initializeDatabase } from "./db";

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Products") {
              iconName = "list-outline";
            } else if (route.name === "Cart") {
              iconName = "cart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Products" component={ProductsScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}