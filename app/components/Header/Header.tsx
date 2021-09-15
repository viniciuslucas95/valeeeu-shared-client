import React from 'react';
import {
  MainHeaderContainer,
  LeftHeaderSide,
  RightHeaderSide,
  Container,
} from './styles';

interface IProps {
  leftSide?: object;
  rightSide?: object;
  extendedHeader?: object;
}

export function Header({ leftSide, rightSide, extendedHeader }: IProps) {
  return (
    <Container>
      <MainHeaderContainer>
        <LeftHeaderSide>{leftSide}</LeftHeaderSide>
        <RightHeaderSide>{rightSide}</RightHeaderSide>
      </MainHeaderContainer>
      {extendedHeader}
    </Container>
  );
}
