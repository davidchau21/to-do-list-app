import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  color?: string;
  tagStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const TagComponent = (props: Props) => {
  const {textStyle, tagStyle, text, color, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={[
        globalStyles.tag,
        tagStyle,
        {backgroundColor: color ?? colors.blue},
      ]}>
      <TextComponent text={text} styles={textStyle} />
    </TouchableOpacity>
  );
};

export default TagComponent;

const styles = StyleSheet.create({});
