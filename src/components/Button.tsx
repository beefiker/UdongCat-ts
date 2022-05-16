import React, { CSSProperties } from "react";
import { Image, Text, TouchableOpacity, ViewPropTypes } from "react-native";
import tailwind from "lib/tailwind";

type TTouchableStyle =
  | "roundPurpleBtn"
  | "fullPurpleBtn"
  | "roundBlackBtn"
  | "fullBlackBtn"
  | "fullGrayBtn";

type TTextStyle = "fontPurpleText" | "fontWhiteText" | "fontBlackText";

interface IButtonProps {
  imgSrc?: any;
  touchableStyle: TTouchableStyle;
  addTouchStyle?: CSSProperties;
  textStyle?: TTextStyle;
  addTextStyle?: CSSProperties;
  btnTitle: string;
  onPress?: () => void;
}

type TDefaultTouchableStyle = {
  [key in TTouchableStyle]: string[];
};

const deafultButtonStyle = [`justify-center`, `items-center`, `rounded-md`];
const defaultTouchableStyle: TDefaultTouchableStyle = {
  fullBlackBtn: [`bg-black`],
  fullGrayBtn: [`bg-lightgray`],
  fullPurpleBtn: [`bg-purple`],
  roundBlackBtn: [`bg-white`, `border-black`],
  roundPurpleBtn: [`bg-white`, `border-purple`],
};

function Button(props: IButtonProps) {
  const {
    imgSrc,
    touchableStyle,
    addTouchStyle,
    btnTitle,
    addTextStyle,
    onPress,
    textStyle,
  } = props;
  return (
    <TouchableOpacity style={{}}>
      {imgSrc && <Image source={imgSrc} style={{}} />}
      <Text
        style={tailwind.style(
          ...deafultButtonStyle,
          ...defaultTouchableStyle[touchableStyle]
        )}
      >
        {btnTitle}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
