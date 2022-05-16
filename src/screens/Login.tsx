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
import tailwind from "lib/tailwind";
import Button from "components/Button";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

function Login({ navigation }: Props) {
  const { t, i18n } = useTranslation();
  const onPressLocation = () => {
    navigation.navigate("Register");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={tailwind`flex flex-col`}
        >
          <View style={tailwind`flex flex-col`}>
            <ImageBackground
              resizeMode="cover"
              source={require("static/images/login_background_cat.png")}
              style={tailwind` h-160 pt-17 pl-5`}
            >
              <Text style={tailwind`text-white text-4xl`}>
                {t("home.title")}
              </Text>
              <Text style={tailwind`text-white text-base mt-12`}>
                {t("home.subject")}
              </Text>
            </ImageBackground>
          </View>
          <View style={tailwind`p-5`}>
            <View style={tailwind`flex flex-row h-30`}>
              <Button btnTitle="asd" touchableStyle="roundPurpleBtn" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Login;
