import { Platform, StyleSheet } from 'react-native';
import {colors} from '../constants/colors';
import { fontFamilies } from '../constants/fontFamillies';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        padding: 20,
        paddingTop: Platform.OS === 'ios' ? 40 : 42,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 14,
        fontFamily: fontFamilies.regular,
        color: colors.text,
    }
});
