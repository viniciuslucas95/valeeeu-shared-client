import React from 'react';
import { ScheduleIcon } from '../../../../../assets/svgs/icons';
import { Touchable } from '../../../components';
import { IStyleable } from '../../../components/interfaces';
import { StackScreens } from '../../../enums';
import { INavigate } from '../interfaces';

interface IProps extends INavigate, IStyleable {}

export function ScheduleButton({ navigation, style }: IProps) {
  return (
    <Touchable
      style={style}
      onPress={() => navigation.navigate(StackScreens.Schedule)}
    >
      <ScheduleIcon />
    </Touchable>
  );
}
