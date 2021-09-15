import { StyleProp, ViewStyle } from 'react-native';
import { Unit } from '../../../../helpers';

const { vw } = Unit;

export const headerButtonStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: vw(2.5),
  paddingVertical: vw(2),
};
