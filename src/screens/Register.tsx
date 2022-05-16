import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";

import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "router/Router";
import tailwind from "twrnc";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

function Register({ navigation }: Props) {
  const { t, i18n } = useTranslation();
  const onPressLocation = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={tailwind`flex flex-col w-full h-full items-center justify-center`}
        >
          <Text onPress={() => onPressLocation()}>Register</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Register;
