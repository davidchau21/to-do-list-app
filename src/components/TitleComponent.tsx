import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamillies';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  font?: string;
  size?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
  height?: number;
}

const TitleComponent = (props: Props) => {
  const {text, font, size, color, styles,height} = props;
  const weight: any =
    Platform.OS === 'ios'
      ? font
        ? {fontWeight: font}
        : {fontWeight: fontFamilies.semiBold}
      : {};

  return (
    <TextComponent
      size={size ?? 20}
      font={font ?? fontFamilies.semiBold}
      color={color}
      text={text}
      styles={[
        globalStyles.text,
        weight,
        {
          fontFamily: font ?? fontFamilies.bold,
          fontSize: size ?? 16,
          lineHeight: height ? height: size ? size + 4: 20,
          color: color ? color : colors.text,
          flex: 0,
        },
        styles,
      ]}
    />
  );
};

export default TitleComponent;

const styles = StyleSheet.create({});
