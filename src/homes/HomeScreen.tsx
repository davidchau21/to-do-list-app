import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from '../components/RowComponent';

const HomeScreen = () => {
  return (
    <Container>
      <RowComponent justify='space-between'>
      <Text style={[globalStyles.text]}>Hello kflfsjdfljsd</Text>
      </RowComponent>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
