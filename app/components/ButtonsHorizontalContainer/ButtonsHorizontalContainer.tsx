import React, { PropsWithChildren } from 'react';
import { Container } from './styles';

export function ButtonsHorizontalContainer({
  children,
}: PropsWithChildren<object>) {
  return <Container>{children}</Container>;
}
