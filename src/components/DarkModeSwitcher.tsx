import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tailwind from "twrnc";

const DarkModeSwitcher = ({ toggler }: { toggler: () => void }) => {
  return (
    <TouchableOpacity
      style={tailwind`w-20 h-10 flex-row justify-center items-center bg-black dark:bg-white rounded-md`}
      onPress={() => toggler()}
    >
      <Text style={tailwind`text-white dark:text-black`}>switch theme</Text>
    </TouchableOpacity>
  );
};

export default DarkModeSwitcher;
