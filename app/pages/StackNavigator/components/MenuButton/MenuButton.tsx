import React from 'react';
import { MenuIcon } from '../../../../../assets/svgs/icons';
import { Touchable } from '../../../components';
import { IStyleable } from '../../../components/interfaces';
import { INavigate } from '../interfaces';

interface IProps extends INavigate, IStyleable {}

export function MenuButton({ navigation, style }: IProps) {
  return (
    <Touchable style={style} onPress={() => console.log('menu pressed')}>
      <MenuIcon />
    </Touchable>
  );
}
