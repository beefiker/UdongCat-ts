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
import customedTailwind from "lib/tailwind";

function TestComp() {
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
    <View style={customedTailwind`flex-row-center mt-10`}>
      <TextInput
        style={tailwind`w-50 h-10 rounded-l-md border-2 border-black dark:border-white p-1 text-black dark:text-white`}
        value={value}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          handleInputChange(e)
        }
      />
      <TouchableOpacity
        style={customedTailwind`w-20 h-10 bg-gray-500 rounded-r-md flex-row-center`}
        onPress={() => updateRecoilState()}
      >
        <Text style={tailwind`text-white`}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TestComp;
