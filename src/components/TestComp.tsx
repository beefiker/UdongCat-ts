import React from "react";
import { Text } from "react-native";
import tailwind from "twrnc";

const TestComp = () => {
  return <Text style={tailwind`text-blue-800 text-3xl mt-10`}>TestComp</Text>;
};

export default TestComp;
