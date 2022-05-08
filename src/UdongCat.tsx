import DarkModeSwitcher from "components/DarkModeSwitcher";
import TestComp from "components/TestComp";
import TestRecoil from "components/TestRecoil";
import { StyleSheet, Text, View } from "react-native";
import tailwind, { useDeviceContext, useAppColorScheme } from "twrnc";

const UdongCat = () => {
  useDeviceContext(tailwind, { withDeviceColorScheme: false });

  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tailwind);

  console.log(colorScheme);
  return (
    <View
      style={tailwind`flex-col w-full h-full bg-white dark:bg-black items-center justify-center`}
    >
      <DarkModeSwitcher toggler={toggleColorScheme} />
      <TestComp />
      <TestRecoil />
    </View>
  );
};

export default UdongCat;
