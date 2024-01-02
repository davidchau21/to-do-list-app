import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import CircularProgress from 'react-native-circular-progress-indicator';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {colors} from '../constants/colors';
import { fontFamilies } from '../constants/fontFamillies';

interface Props {
  color?: string;
  value: number;
  maxValue?: number;
  radius?: number;
}
const CircularComponent = (props: Props) => {
  const {color, value, maxValue, radius} = props;
  return (
    <AnimatedCircularProgress
      size={80}
      width={8}
      fill={value}
      tintColor={color ?? colors.blue}
      rotation={0}
      lineCap="round"
      // radius={radius ?? 40}
      backgroundColor="#3C444A">
      {() => (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20,fontFamily: fontFamilies.medium ,color: colors.text}}>{`${value}%`}</Text>
        </View>
      )}
    </AnimatedCircularProgress>
  );
};

export default CircularComponent;

const styles = StyleSheet.create({});
