import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  children: React.ReactNode;
  color?: string;
}

const CartImageComponent = (props: Props) => {
  const {children, color} = props;
  return (
    <ImageBackground
      source={require('../assets/images/card-bg.png')}
      imageStyle={{borderRadius: 12}}
      style={globalStyles.card}>
      <View
        style={[
          globalStyles.card,
          {
            backgroundColor: color ?? 'rgba(113, 77, 217, 0.9)',
            borderRadius: 12,
            flex: 1,
            padding: 12
          },
        ]}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default CartImageComponent;

const styles = StyleSheet.create({});
