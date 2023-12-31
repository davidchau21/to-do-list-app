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
import {Element4, Notification, SearchNormal1} from 'iconsax-react-native';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';
import CircularComponent from '../components/CircularComponent';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const HomeScreen = () => {
  const fill = 80;
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <Element4 color={colors.desc} size={24} />
          <Notification color={colors.desc} size={24} />
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
          <TextComponent color="#696B6F" text="Search task" />
          <SearchNormal1 size={24} color={colors.desc} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 task done" />
              <SpaceComponent height={12} />
              <RowComponent justify="flex-start">
                <TagComponent
                  onPress={() => console.log('Say hi')}
                  text="March 22"
                />
              </RowComponent>
            </View>
            <View>
              {/* <CircularComponent value={80} /> */}
              <AnimatedCircularProgress
                size={80}
                width={8}
                fill={fill}
                tintColor="blue"
                backgroundColor="#3d5875">
                {() => (
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: colors.text}}>{`${fill}%`}</Text>
                  </View>
                )}
              </AnimatedCircularProgress>
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
