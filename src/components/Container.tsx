import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children: ReactNode;
}

const Container = (props: Props) => {
  const {title, back, right, children} = props;
  return <ScrollView style={[globalStyles.container, {paddingVertical: 15}]}>{children}</ScrollView>
};

export default Container;

const styles = StyleSheet.create({});
