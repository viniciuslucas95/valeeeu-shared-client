import React, { PropsWithChildren } from 'react';
import { Container, Line, Text } from './styles';
import { Unit } from '../../../helpers';
import { IColorable, IHaveSize, IStyleable } from '../../../interfaces';

const { vwPx } = Unit;

interface IProps extends IStyleable, Partial<IHaveSize>, Partial<IColorable> {
  children: string;
}

export function Separator({
  children,
  width,
  style,
  isSecondary,
}: PropsWithChildren<IProps>) {
  return (
    <Container style={style} width={width ?? vwPx(90)}>
      <Line isSecondary={isSecondary ?? false} />
      <Text isSecondary={isSecondary ?? false}>{children}</Text>
      <Line isSecondary={isSecondary ?? false} />
    </Container>
  );
}
