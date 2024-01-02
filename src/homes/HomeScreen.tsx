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
import {
  Edit2,
  Element4,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';
import CircularComponent from '../components/CircularComponent';
import CartImageComponent from '../components/CartImageComponent';
import AvatarGroup from '../components/AvatarGroup';
import ProgressBarComponent from '../components/ProgressBarComponent';

const HomeScreen = () => {
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
              <CircularComponent value={80} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent styles={{alignItems: 'flex-start'}}>
          <View style={{flex: 1}}>
            <CartImageComponent>
              <TouchableOpacity
                onPress={() => console.log('Say hi')}
                style={[globalStyles.iconContainer]}>
                <Edit2 size={20} color={colors.white} />
              </TouchableOpacity>
              <TitleComponent text="UX Design" />
              <TextComponent text="Task management mobile app" size={13} />

              <View style={{marginVertical: 28}}>
                <AvatarGroup />
                <ProgressBarComponent
                  precent="70%"
                  color="#0AACFF"
                  size="large"
                />
              </View>
              <TextComponent
                text="Due, 2023 March 03"
                size={12}
                color={colors.desc}
              />
            </CartImageComponent>
          </View>

          <SpaceComponent width={16} />

          <View style={{flex: 1}}>
            <CartImageComponent color="rgba(33, 150, 243, 0.9)">
              <TouchableOpacity
                onPress={() => console.log('Say hi')}
                style={[globalStyles.iconContainer]}>
                <Edit2 size={20} color={colors.white} />
              </TouchableOpacity>
              <TitleComponent text="API Payment" size={18} />
              <AvatarGroup />
              <ProgressBarComponent precent="40%" color="#A2F068" />
            </CartImageComponent>

            <SpaceComponent height={16} />

            <CartImageComponent color="rgba(18, 181, 22, 0.9)">
              <TouchableOpacity
                onPress={() => console.log('Say hi')}
                style={[globalStyles.iconContainer]}>
                <Edit2 size={20} color={colors.white} />
              </TouchableOpacity>
              <TitleComponent text="Update work" />
              <TextComponent text="Revision home page" size={13} />
            </CartImageComponent>
          </View>
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <TitleComponent text="Urgent tasks" />
        <SpaceComponent height={10} />
        <CardComponent>
          <RowComponent>
            <CircularComponent value={40} radius={36} />
            <View style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
              <TitleComponent text="Update work" />
              <TextComponent text="Revision home page" size={13} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
