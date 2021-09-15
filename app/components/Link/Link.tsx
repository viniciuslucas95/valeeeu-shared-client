import React, { PropsWithChildren, useState } from 'react';
import { Sizes } from '../../enums';
import {
  IColorable,
  IHaveSize,
  IPressable,
  IStyleable,
} from '../../interfaces';
import { Container, TouchableContainer, Text } from './styles';

interface IProps
  extends IStyleable,
    Partial<IColorable>,
    IPressable,
    Partial<IHaveSize> {
  children: string;
}

export function Link({
  children,
  style,
  isSecondary,
  onPress,
  size,
}: PropsWithChildren<IProps>) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <Container style={style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighted(true)}
        onPressOut={() => setIsHighlighted(false)}
        onPress={onPress}
      >
        <Text
          isHighlighted={isHighlighted}
          isSecondary={isSecondary ?? false}
          size={size ?? Sizes.medium}
        >
          {children}
        </Text>
      </TouchableContainer>
    </Container>
  );
}
