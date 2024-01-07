import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import TextComponent from '../../components/TextComponent';
import {TaskModel} from '../../models/TaskModel';
import SectionComponent from '../../components/SectionComponent';
import InputComponent from '../../components/InputComponent';
import {User} from 'iconsax-react-native';
import {colors} from '../../constants/colors';
import {Button, View} from 'react-native';
import DateTimePickerComponent from '../../components/DateTimePickerComponent';
import RowComponent from '../../components/RowComponent';
import SpaceComponent from '../../components/SpaceComponent';
import DropdownPicker from '../../components/DropdownPicker';
import {SelectModel} from '../../models/SelectModel';
import firestore from '@react-native-firebase/firestore';

const initValue: TaskModel = {
  title: '',
  description: '',
  dueDate: new Date(),
  start: new Date(),
  end: new Date(),
  uids: [],
  flieUrl: [],
};

const AddNewTask = ({navigation}: any) => {
  const [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);
  const [usersSelect, setUsersSelect] = useState<SelectModel[]>([]);

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const handleGetAllUsers = async () => {
    await firestore()
      .collection('users')
      .get()
      .then(snap => {
        if (snap.empty) {
          console.log(`users data not found`);
        } else {
          const items: SelectModel[] = [];

          snap.forEach(item => {
            items.push({
              label: item.data().name,
              value: item.id,
            });
          });
          setUsersSelect(items);
        }
      })
      .catch((error: any) => {
        console.log(`Can not get users: ${error.message}`);
      });
  };
  const handleChangeValue = (id: string, value: string| string[] | Date) => {
    const item: any = {...taskDetail};

    item[`${id}`] = value;

    setTaskDetail(item);
  };

  const handleAddNewTask = async () => {
    console.log(taskDetail);
  };

  return (
    <Container back title="Add new task">
      <SectionComponent>
        <InputComponent
          value={taskDetail.title}
          onChange={val => handleChangeValue('title', val)}
          title="Title"
          allowClear
          placeholder="Title of task"
        />
        <InputComponent
          value={taskDetail.description}
          onChange={val => handleChangeValue('description', val)}
          title="Description"
          allowClear
          placeholder="Content"
          multible
          numberOfLines={3}
        />
        <DateTimePickerComponent
          selected={taskDetail.dueDate}
          onSelect={val => handleChangeValue('dueDate', val)}
          placeholder="Choice"
          type="date"
          title="Due date"
        />
        <RowComponent>
          <View style={{flex: 1}}>
            <DateTimePickerComponent
              type="time"
              selected={taskDetail.start}
              onSelect={val => handleChangeValue('', val)}
              title="Start"
            />
          </View>
          <SpaceComponent width={10} />
          <View style={{flex: 1}}>
            <DateTimePickerComponent
              type="time"
              selected={taskDetail.end}
              onSelect={val => handleChangeValue('', val)}
              title="End"
            />
          </View>
        </RowComponent>

        <DropdownPicker
          selected={taskDetail.uids}
          items={usersSelect}
          onSelect={val => handleChangeValue('uids', val)}
          title="Members"
          multible
        />
      </SectionComponent>
      <SectionComponent>
        <Button title="Save" onPress={handleAddNewTask} />
      </SectionComponent>
    </Container>
  );
};

export default AddNewTask;
