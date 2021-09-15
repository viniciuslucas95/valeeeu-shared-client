import React, { PropsWithChildren } from 'react';
import { Separator } from './Separator';
import { Container } from './styles';

interface IProps {
  title: string;
  children: object;
}

export function SeparatorContainer({
  title,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <Container>
      <Separator>{title}</Separator>
      {children}
    </Container>
  );
}
