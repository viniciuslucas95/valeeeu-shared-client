import React, { PropsWithChildren } from 'react';
import { Container } from './styles';

export function HorizontalContainer({ children }: PropsWithChildren<object>) {
  return <Container>{children}</Container>;
}
