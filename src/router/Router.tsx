import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "screens/Login";
import Register from "screens/Register";
import { useTranslation } from "react-i18next";

export type RootStackParamList = {
  Login: { id: string; password: string } | undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator();

function Router() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {},
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default Router;
