import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import { fontFamilies } from '../constants/fontFamillies';
import { colors } from '../constants/colors';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
}

const TextComponent = (props: Props) => {
  const {text, size, font, color, flex} = props;
  return <Text style={[globalStyles.text, 
  {
    flex: flex ?? 1,
    fontFamily: font ?? fontFamilies.regular,
    fontSize: size ?? 14,
    color: color ?? colors.desc,

  }]}>{text}</Text>;
};

export default TextComponent;

const styles = StyleSheet.create({});
