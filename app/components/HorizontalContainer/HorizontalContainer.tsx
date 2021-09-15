import React, { PropsWithChildren } from 'react';
import { FlexDistribution } from '../../enums';
import { IHaveFlexDistribution, IStyleable } from '../../interfaces';
import { Container } from './styles';

interface IProps extends Partial<IHaveFlexDistribution>, IStyleable {
  children: object;
}

export function HorizontalContainer({
  children,
  style,
  flexDistribution,
}: PropsWithChildren<IProps>) {
  return (
    <Container
      flexDistribution={flexDistribution ?? FlexDistribution.center}
      style={style}
    >
      {children}
    </Container>
  );
}
