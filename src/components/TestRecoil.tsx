import commonState from "atoms/commonState";
import React from "react";
import { Text, View } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import tailwind from "twrnc";

const TestRecoil = () => {
  const common = useRecoilValue(commonState);
  return (
    <View style={tailwind`flex-col justify-center items-center mt-10`}>
      <Text style={tailwind`text-black dark:text-white`}>[Recoil state]</Text>
      <Text style={tailwind`font-bold text-black dark:text-white`}>
        {common?.something ?? "Not provided yet"}
      </Text>
    </View>
  );
};

export default TestRecoil;
