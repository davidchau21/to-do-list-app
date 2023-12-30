import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  children: React.ReactNode;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const CardComponent = (props: Props) => {
  const {children, bgColor, styles} = props;
  return (
    <View style={[globalStyles.inputContainer, {padding: 12}, styles]}>
      {children}
    </View>
  );
};

export default CardComponent;

