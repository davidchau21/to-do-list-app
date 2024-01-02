import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import CircularProgress from 'react-native-circular-progress-indicator';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {colors} from '../constants/colors';

interface Props {
  color?: string;
  value: number;
  maxValue?: number;
}
const CircularComponent = (props: Props) => {
  const {color, value, maxValue} = props;
  return (
    <AnimatedCircularProgress
      size={80}
      width={8}
      fill={value}
      tintColor="blue"
      backgroundColor="#3d5875">
      {() => (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: colors.text}}>{`${value}%`}</Text>
        </View>
      )}
    </AnimatedCircularProgress>
  );
};

export default CircularComponent;

const styles = StyleSheet.create({});
