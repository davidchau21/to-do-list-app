import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="dada" />
          <TextComponent text="dada" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Jason" />
        <TitleComponent text="Be productive today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={globalStyles.inputContainer}
          onPress={() => console.log('Say hi')}>
          <TextComponent text="Search" />
          <Text>S</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text='Task progress'/>
              <TextComponent text="30/40 task done" />
              <TextComponent text="Tag" />
            </View>
            <View>
              <TextComponent text="CircleChar" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
