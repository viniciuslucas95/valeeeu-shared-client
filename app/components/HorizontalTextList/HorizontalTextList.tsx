import React from 'react';
import { Container } from './styles';
import { IHaveBoldText } from './interface';
import { IColorable, IHaveSize, IStyleable } from '../../interfaces';
import { Fonts, Sizes } from '../../enums';
import { Item } from './Item';

interface IProps
  extends Partial<IColorable>,
    IStyleable,
    IHaveBoldText,
    Partial<IHaveSize> {
  texts: string[];
  font: Fonts;
}

export function HorizontalTextList({
  texts,
  style,
  isSecondary,
  font,
  size,
}: IProps) {
  if (!texts) return null;

  return (
    <Container style={style}>
      {texts.map((item, index) => {
        return index < texts.length - 1 ? (
          <Item
            key={index}
            hasSeparator
            isSecondary={isSecondary ?? false}
            font={font}
            size={size ?? Sizes.medium}
          >
            {item}
          </Item>
        ) : (
          <Item
            key={index}
            isSecondary={isSecondary ?? false}
            font={font}
            size={size ?? Sizes.medium}
          >
            {item}
          </Item>
        );
      })}
    </Container>
  );
}
