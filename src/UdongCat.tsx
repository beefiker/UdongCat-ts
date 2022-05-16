import React from "react";
import DarkModeSwitcher from "components/DarkModeSwitcher";
import TestComp from "components/TestComp";
import TestRecoil from "components/TestRecoil";
import { StyleSheet, Text, View } from "react-native";
import tailwind, { useDeviceContext, useAppColorScheme } from "twrnc";
import Router from "router/Router";
import { NavigationContainer } from "@react-navigation/native";

import "lib/i18n";

function UdongCat() {
  useDeviceContext(tailwind, { withDeviceColorScheme: false });

  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tailwind);

  console.log(colorScheme);

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default UdongCat;
