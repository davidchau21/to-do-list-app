import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import TextComponent from '../../components/TextComponent';
import {TaskModel} from '../../models/TaskModel';
import SectionComponent from '../../components/SectionComponent';
import InputComponent from '../../components/InputComponent';
import {AttachSquare, User} from 'iconsax-react-native';
import {colors} from '../../constants/colors';
import {Button, View} from 'react-native';
import DateTimePickerComponent from '../../components/DateTimePickerComponent';
import RowComponent from '../../components/RowComponent';
import SpaceComponent from '../../components/SpaceComponent';
import DropdownPicker from '../../components/DropdownPicker';
import {SelectModel} from '../../models/SelectModel';
import firestore from '@react-native-firebase/firestore';
import ButtonComponent from '../../components/ButtonComponent';
import TitleComponent from '../../components/TitleComponent';
import DocumentPicker, {
  DocumentPickerOptions,
  DocumentPickerResponse,
} from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';

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
  const [attachments, setAttachments] = useState<DocumentPickerResponse[]>([]);
  const [attachmentsUrl, setAttachmentsUrl] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  const handleChangeValue = (id: string, value: string | string[] | Date) => {
    const item: any = {...taskDetail};

    item[`${id}`] = value;

    setTaskDetail(item);
  };

  const handleAddNewTask = async () => {
    const data = {
      ...taskDetail,
      flieUrl: attachmentsUrl,
    };

    await firestore()
      .collection('task')
      .add(data)
      .then(() => {
        console.log('Add new task success');
        navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handlePickerDocument = async () => {
    DocumentPicker.pick({})
      .then(res => {
        setAttachments(res);

        res.forEach(item => {
          handleUploadFileToStorage(item);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUploadFileToStorage = async (item: DocumentPickerResponse) => {
    const filename = item.name ?? `file${Date.now()}`;
    const path = `documents/${filename}`;
    const items = [...attachmentsUrl];

    await storage().ref(path).putFile(item.uri);

    await storage()
      .ref(path)
      .getDownloadURL()
      .then(url => {
        items.push(url);
        setAttachmentsUrl(items);
      })
      .catch(err => {
        console.log(err);
      });
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
          multible
          numberOfLines={2}
        />
        <SpaceComponent height={10} />
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
              onSelect={val => handleChangeValue('start', val)}
              title="Start"
            />
          </View>
          <SpaceComponent width={10} />
          <View style={{flex: 1}}>
            <DateTimePickerComponent
              type="time"
              selected={taskDetail.end}
              onSelect={val => handleChangeValue('end', val)}
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

        <View>
          <RowComponent justify="flex-start" onPress={handlePickerDocument}>
            <TitleComponent text="Attachmets" flex={0} />
            <SpaceComponent width={8} />
            <AttachSquare size={16} color={colors.white} />
          </RowComponent>
          {attachments.length > 0 &&
            attachments.map((item, index) => (
              <RowComponent
                key={`attachments${index}`}
                styles={{paddingVertical: 12}}>
                <TextComponent text={item.name ?? ''} />
              </RowComponent>
            ))}
        </View>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent text="Save" onPress={handleAddNewTask} />
      </SectionComponent>
    </Container>
  );
};

export default AddNewTask;
