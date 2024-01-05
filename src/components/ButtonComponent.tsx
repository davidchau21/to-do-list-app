import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamillies';
import {colors} from '../constants/colors';
import {ActivityIndicator} from 'react-native';

interface Props {
  text: string;
  isLoading?: boolean;
  onPress?: () => void;
  color?: string;
}

const ButtonComponent = (props: Props) => {
  const {text, onPress, color, isLoading} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color ? color : isLoading ? colors.gray : colors.blue,
        borderRadius: 14,
        height: 48,
      }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TextComponent
          text={text}
          flex={0}
          styles={{textTransform: 'uppercase'}}
          size={16}
          font={fontFamilies.semiBold}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
