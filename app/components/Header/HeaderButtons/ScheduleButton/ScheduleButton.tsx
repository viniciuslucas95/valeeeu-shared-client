import React from 'react';
import { MainScreens } from '../../../../../../app/enums/StackScreens';
import { ScheduleIcon } from '../../../../../assets/svgs/icons';
import { INavigate, IStyleable } from '../../../../interfaces';
import { TouchableContainer } from '../../../TouchableContainer';
import { headerButtonStyle } from '../styles';
import { Unit } from '../../../../helpers';

const { vw } = Unit;

interface IProps extends INavigate, IStyleable {}

export function ScheduleButton({ navigation, style }: IProps) {
  return (
    <TouchableContainer
      style={[{ left: vw(2.5) }, style]}
      onPress={() => navigation.navigate(MainScreens.Schedule)}
      buttonContainerStyle={headerButtonStyle}
    >
      <ScheduleIcon />
    </TouchableContainer>
  );
}
