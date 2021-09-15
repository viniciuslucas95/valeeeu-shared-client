import React from 'react';
import { colors } from '../../../configs';
import { Unit } from '../../helpers';
import { IHavePlaceholder, IHaveSize, IStyleable } from '../../interfaces';
import { Container } from './styles';

const { vwPx } = Unit;

interface IProps extends IStyleable, Partial<IHaveSize>, IHavePlaceholder {
  isSecure?: boolean;
}

export function Input({
  placeholderText,
  placeholderColor,
  size,
  isSecure,
  style,
  width,
}: IProps) {
  return (
    <Container
      placeholder={placeholderText}
      placeholderTextColor={placeholderColor ?? colors.mediumGray}
      selectionColor={colors.purple}
      secureTextEntry={isSecure}
      width={width ?? vwPx(90)}
      size={size}
      style={style}
    ></Container>
  );
}
