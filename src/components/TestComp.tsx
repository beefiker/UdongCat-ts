import commonState from "atoms/commonState";
import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { useRecoilState } from "recoil";
import tailwind from "twrnc";

const TestComp = () => {
  const [value, setValue] = useState<string>("");
  const [common, setCommon] = useRecoilState(commonState);

  const handleInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setValue(e.nativeEvent.text);
  };

  const updateRecoilState = () => {
    setCommon({ something: value });
  };

  return (
    <View style={tailwind`flex-row mt-10`}>
      <TextInput
        style={tailwind`w-50 h-10 border-2 p-1`}
        value={value}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          handleInputChange(e)
        }
      />
      <TouchableOpacity
        style={tailwind`w-20 h-10 bg-gray-500 flex-row justify-center items-center`}
        onPress={() => updateRecoilState()}
      >
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestComp;
