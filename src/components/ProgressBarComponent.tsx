import {DimensionValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamillies';

interface Props {
  size?: 'small' | 'default' | 'large';
  color?: string;
  precent: DimensionValue;
}

const ProgressBarComponent = (props: Props) => {
  const {size, color, precent} = props;

  const heihtContent = size === 'small' ? 6 : size === 'large' ? 10 : 8;
  return (
    <View style={{marginTop: 12, marginBottom: 16}}>
      <View
        style={{
          height: heihtContent,
          width: '100%',
          backgroundColor: 'rgba(0,0,0, 0.3)',
          borderRadius: 100,
        }}>
        <View
          style={{
            height: heihtContent,
            width: precent,
            backgroundColor: color ?? colors.blue,
            borderRadius: 100,
          }}></View>
        </View>

      <RowComponent styles={{justifyContent: 'space-between', marginTop: 4}}>
        <TextComponent text="Progress" size={12} />
        <TextComponent font={fontFamilies.bold} text={`${precent}`} size={12} flex={0}/>
      </RowComponent>
    </View>
  );
};

export default ProgressBarComponent;

const styles = StyleSheet.create({});
