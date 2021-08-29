import React from 'react';
import { ArrowIcon } from '../../../../../assets/svgs/icons';
import { Touchable } from '../../../components';
import { IStyleable } from '../../../components/interfaces';
import { INavigate } from '../interfaces';
import { Unit } from '../../../../helpers';

const { vw } = Unit;

interface IProps extends INavigate, IStyleable {}

export function BackButton({ navigation, style }: IProps) {
  return (
    <Touchable
      style={style}
      onPress={() => navigation.goBack()}
      buttonContainerStyle={{
        paddingRight: vw(4),
        paddingVertical: vw(2),
      }}
    >
      <ArrowIcon />
    </Touchable>
  );
}
