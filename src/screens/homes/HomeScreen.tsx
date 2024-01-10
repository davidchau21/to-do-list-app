import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import {globalStyles} from '../../styles/globalStyles';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import TitleComponent from '../../components/TitleComponent';
import {colors} from '../../constants/colors';
import CardComponent from '../../components/CardComponent';
import {
  Add,
  Edit2,
  Element4,
  Logout,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import TagComponent from '../../components/TagComponent';
import SpaceComponent from '../../components/SpaceComponent';
import CircularComponent from '../../components/CircularComponent';
import CartImageComponent from '../../components/CartImageComponent';
import AvatarGroup from '../../components/AvatarGroup';
import ProgressBarComponent from '../../components/ProgressBarComponent';
import {fontFamilies} from '../../constants/fontFamillies';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {TaskModel} from '../../models/TaskModel';

const HomeScreen = ({navigation}: any) => {
  const user = auth().currentUser;

  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  useEffect(() => {
    getNewTasks();
  }, []);

  const getNewTasks = async () => {
    setIsLoading(true);

    await firestore()
      .collection('task')
      .orderBy('dueDate')
      .limitToLast(3)
      .onSnapshot(snap => {
        if (snap.empty) {
          console.log(`tasks not found`);
        } else {
          const items: TaskModel[] = [];
          snap.forEach((item: any) =>
            items.push({
              id: item.id,
              ...item.data(),
            }),
          );
          console.log(items);
          setIsLoading(false);
          setTasks(items);
        }
      });
  };
  return (
    <View style={{flex: 1}}>
      <Container isScroll>
        <SectionComponent>
          <RowComponent justify="space-between">
            <Element4 color={colors.desc} size={24} />
            <Notification color={colors.desc} size={24} />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TextComponent text={`Hi, ${user?.email}`} />
              <TitleComponent text="Be productive today" />
            </View>
            <TouchableOpacity onPress={async () => auth().signOut()}>
              <Logout size={24} color={colors.desc} />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent
            styles={globalStyles.inputContainer}
            onPress={() => navigation.navigate('SearchScreen')}>
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
        {isLoading ? (
          <ActivityIndicator />
        ) : tasks.length > 0 ? (
          <SectionComponent>
            <RowComponent styles={{alignItems: 'flex-start'}}>
              <View style={{flex: 1}}>
                {tasks[0] && (
                  <CartImageComponent>
                    <TouchableOpacity
                      onPress={() => console.log('Say hi')}
                      style={[globalStyles.iconContainer]}>
                      <Edit2 size={20} color={colors.white} />
                    </TouchableOpacity>
                    <TitleComponent text={tasks[0].title} />
                    <TextComponent text={tasks[0].description} size={13} />

                    <View style={{marginVertical: 28}}>
                      <AvatarGroup uids={tasks[0].uids} />
                      {tasks[0].progress && (
                        <ProgressBarComponent
                          precent="70%"
                          color="#0AACFF"
                          size="large"
                        />
                      )}
                    </View>
                    <TextComponent
                      text={`Due: ${new Date(tasks[0].dueDate)}`}
                      size={12}
                      color={colors.desc}
                    />
                  </CartImageComponent>
                )}
              </View>

              <SpaceComponent width={16} />

              <View style={{flex: 1}}>
                {tasks[1] && (
                  <CartImageComponent color="rgba(33, 150, 243, 0.9)">
                    <TouchableOpacity
                      onPress={() => console.log('Say hi')}
                      style={[globalStyles.iconContainer]}>
                      <Edit2 size={20} color={colors.white} />
                    </TouchableOpacity>
                    <TitleComponent text={tasks[1].title} size={18} />
                    {tasks[1].uids && <AvatarGroup uids={tasks[1].uids} />}
                    {tasks[1].progress && (
                      <ProgressBarComponent precent="40%" color="#A2F068" />
                    )}
                  </CartImageComponent>
                )}

                <SpaceComponent height={16} />
                {tasks[2] && (
                  <CartImageComponent color="rgba(18, 181, 22, 0.9)">
                    <TouchableOpacity
                      onPress={() => console.log('Say hi')}
                      style={[globalStyles.iconContainer]}>
                      <Edit2 size={20} color={colors.white} />
                    </TouchableOpacity>
                    <TitleComponent text={tasks[2].title} />
                    <TextComponent text={tasks[2].description} size={13} />
                  </CartImageComponent>
                )}
              </View>
            </RowComponent>
          </SectionComponent>
        ) : (
          <></>
        )}

        <SectionComponent>
          <TextComponent
            flex={1}
            font={fontFamilies.bold}
            size={21}
            text="Urgent tasks"
          />
          <SpaceComponent height={10} />
          <CardComponent>
            <RowComponent>
              <CircularComponent value={40} radius={36} />
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
                <TitleComponent text="Update work" />
                <TextComponent text="Revision home page" size={13} />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
        <SectionComponent>
          <TextComponent
            flex={1}
            font={fontFamilies.bold}
            size={21}
            text="Urgent tasks"
          />
          <SpaceComponent height={10} />
          <CardComponent>
            <RowComponent>
              <CircularComponent value={40} radius={36} />
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
                <TitleComponent text="Update work" />
                <TextComponent text="Revision home page" size={13} />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </Container>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewTask')}
          activeOpacity={1}
          style={[
            globalStyles.row,
            {
              backgroundColor: colors.blue,
              padding: 10,
              borderRadius: 100,
              width: '80%',
            },
          ]}>
          <TextComponent text="Add new task" flex={0} />
          <Add size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
