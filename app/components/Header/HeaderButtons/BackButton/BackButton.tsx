import React from 'react';
import { ArrowIcon } from '../../../../../assets/svgs/icons';
import { Unit } from '../../../../helpers';
import { INavigate, IStyleable } from '../../../../interfaces';
import { TouchableContainer } from '../../../TouchableContainer';
import { headerButtonStyle } from '../styles';

const { vw } = Unit;

interface IProps extends INavigate, IStyleable {}

export function BackButton({ navigation, style }: IProps) {
  return (
    <TouchableContainer
      style={[{ right: vw(2.5) }, style]}
      onPress={() => navigation.goBack()}
      buttonContainerStyle={headerButtonStyle}
    >
      <ArrowIcon />
    </TouchableContainer>
  );
}
