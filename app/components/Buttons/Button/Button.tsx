import React, { PropsWithChildren, useState } from 'react';
import { TouchableContainer, ButtonContainer, Text, Container } from './styles';
import { Unit } from '../../../helpers';
import {
  IColorable,
  IHaveSize,
  IPressable,
  IStyleable,
} from '../../../interfaces';
import { Sizes } from '../../../enums';

const { vwPx } = Unit;

interface IProps
  extends IStyleable,
    IPressable,
    Partial<IColorable>,
    Partial<IHaveSize> {
  icon?: object;
  children: string;
}

export function Button({
  children,
  onPress,
  style,
  width,
  isSecondary,
  size,
  icon,
}: PropsWithChildren<IProps>) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container style={style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighting(true)}
        onPressOut={() => setIsHighlighting(false)}
        onPress={() => {
          if (onPress) onPress();
        }}
      >
        <ButtonContainer
          isSecondary={isSecondary ?? false}
          highlight={isHighlighting}
          width={width ?? vwPx(90)}
          size={size ?? Sizes.medium}
        >
          <Text
            isSecondary={isSecondary}
            size={size ?? Sizes.medium}
            highlight={isHighlighting}
          >
            {children}
          </Text>
          {icon}
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
