import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { IPressable, IStyleable } from '../../interfaces';
import {
  OuterStyleContainer,
  TouchableContainer as TouchableContainerStyle,
  Container,
} from './styles';

interface IProps extends IPressable, IStyleable {
  children: object;
  buttonContainerStyle?: StyleProp<ViewStyle>;
}

export function TouchableContainer({
  children,
  onPress,
  style,
  buttonContainerStyle,
}: PropsWithChildren<IProps>) {
  return (
    <OuterStyleContainer style={style}>
      <TouchableContainerStyle onPress={onPress}>
        <Container style={buttonContainerStyle}>{children}</Container>
      </TouchableContainerStyle>
    </OuterStyleContainer>
  );
}
