import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../modules/home/screens/HomeScreen";

import DrawerContent from "../components/drawer/DrawerContent";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: {
          width: 300,
          backgroundColor: "#0F0F0F",
        },
        overlayColor: "rgba(0,0,0,0.65)",
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}