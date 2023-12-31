import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

interface Props {
  color?: string;
  value: number;
  maxValue?: number;
}
const CircularComponent = (props: Props) => {
  const {color, value, maxValue} = props;
  return <CircularProgress value={value} />;
};

export default CircularComponent;

const styles = StyleSheet.create({});
