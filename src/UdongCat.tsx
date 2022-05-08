import TestComp from "components/TestComp";
import { StyleSheet, Text, View } from "react-native";
import tailwind from "twrnc";

const UdongCat = () => {
  return (
    <View
      style={tailwind`flex-col w-full h-full bg-black items-center justify-center`}
    >
      <Text style={tailwind`text-red-900 text-lg`}>[Test] UdongCat</Text>
      <TestComp />
    </View>
  );
};

export default UdongCat;
