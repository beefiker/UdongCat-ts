import React from "react";
import { Text, View } from "react-native";
import { useRecoilValue } from "recoil";

import commonState from "atoms/commonState";

import tailwind from "twrnc";
import customedTailwind from "lib/tailwind";

function TestRecoil() {
  const common = useRecoilValue(commonState);
  return (
    <View style={customedTailwind`flex-col-center mt-10`}>
      <Text style={tailwind`text-black dark:text-white`}>[Recoil state]</Text>
      <Text style={tailwind`font-bold text-black dark:text-white`}>
        {common?.something ?? "Not provided yet"}
      </Text>
    </View>
  );
}

export default TestRecoil;
