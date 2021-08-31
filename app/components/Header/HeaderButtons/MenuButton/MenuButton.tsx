import React from 'react';
import { MenuIcon } from '../../../../../assets/svgs/icons';
import { INavigate, IStyleable } from '../../../../interfaces';
import { TouchableContainer } from '../../../TouchableContainer';
import { headerButtonStyle } from '../styles';
import { Unit } from '../../../../helpers';

const { vw } = Unit;

interface IProps extends INavigate, IStyleable {}

export function MenuButton({ navigation, style }: IProps) {
  return (
    <TouchableContainer
      style={[{ left: vw(2.5) }, style]}
      onPress={() => console.log('menu pressed')}
      buttonContainerStyle={headerButtonStyle}
    >
      <MenuIcon />
    </TouchableContainer>
  );
}
