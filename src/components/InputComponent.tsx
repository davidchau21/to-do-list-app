import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import TitleComponent from './TitleComponent';
import RowComponent from './RowComponent';
import {globalStyles} from '../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../constants/colors';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  title?: string;
  prefix?: ReactNode;
  afflix?: ReactNode;
  allowClear?: boolean;
  multible?: boolean;
  numberOfLines?: number;
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    placeholder,
    title,
    prefix,
    afflix,
    allowClear,
    multible,
    numberOfLines,
  } = props;

  return (
    <View style={{marginBottom: 16}}>
      {title && <TitleComponent text={title} />}
      <RowComponent
        styles={[
          globalStyles.inputContainer,
          {
            marginTop: title ? 8 : 0,
            minHeight: multible && numberOfLines ? 32 * numberOfLines : 32,
            paddingVertical: 14,
            paddingHorizontal: 10,
            alignItems: 'flex-start'
          },
        ]}>
        {prefix && prefix}
        <View
          style={{
            flex: 1,
            paddingLeft: prefix ? 8 : 0,
            paddingRight: afflix ? 8 : 0,
          }}>
          <TextInput
            style={[
              globalStyles.text,
              {margin: 0, padding: 0, paddingVertical: 6, flex: 1},
            ]}
            placeholder={placeholder ?? ''}
            placeholderTextColor={'#676767'}
            value={value}
            onChangeText={val => onChange(val)}
            multiline={multible}
            numberOfLines={numberOfLines}
          />
        </View>
        {afflix && afflix}

        {allowClear && value && (
          <TouchableOpacity onPress={() => onChange('')}>
            <AntDesign name="close" size={20} color={colors.white} />
          </TouchableOpacity>
        )}
      </RowComponent>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
