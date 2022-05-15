import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tailwind from "twrnc";

function DarkModeSwitcher({ toggler }: { toggler: () => void }) {
  return (
    <TouchableOpacity
      style={tailwind`w-30 h-10 flex-row justify-center items-center bg-black dark:bg-white rounded-md`}
      onPress={() => toggler()}
    >
      <Text style={tailwind`text-white dark:text-black font-bold`}>
        switch theme
      </Text>
    </TouchableOpacity>
  );
}

export default DarkModeSwitcher;
