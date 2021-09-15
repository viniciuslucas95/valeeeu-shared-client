import React, { PropsWithChildren } from 'react';
import { Container } from './styles';
import { IColorable, IHaveSize, IStyleable } from '../../../interfaces';
import { Unit } from '../../../helpers';
import { CircleSvg } from '../../../../assets/svgs';
import { colors } from '../../../../configs';
import { Fonts } from '../../../enums';
import {
  ItalicText,
  LightItalicText,
  LightText,
  MediumItalicText,
  MediumText,
  RegularText,
  SemiBoldItalicText,
  SemiBoldText,
} from '../../../styledComponents/Texts';

const { vw, vh } = Unit;
const lineHeight = vh(2);

interface IProps
  extends IStyleable,
    Omit<IColorable, 'color'>,
    Partial<IHaveSize> {
  children: string;
  hasSeparator?: boolean;
  font: Fonts;
}

export function Item({
  children,
  style,
  hasSeparator,
  isSecondary,
  font,
  size,
}: PropsWithChildren<IProps>) {
  const chosenColor = isSecondary ? colors.purple : colors.white;

  function choseFont() {
    switch (font) {
      case Fonts.light:
        return (
          <LightText
            color={chosenColor}
            style={{ lineHeight: lineHeight }}
            size={size}
          >
            {children}
          </LightText>
        );
      case Fonts.lightItalic:
        return (
          <LightItalicText
            color={chosenColor}
            style={{ lineHeight: lineHeight }}
            size={size}
          >
            {children}
          </LightItalicText>
        );
      case Fonts.regular:
        return (
          <RegularText
            color={chosenColor}
            style={{ lineHeight: lineHeight }}
            size={size}
          >
            {children}
          </RegularText>
        );
      case Fonts.italic:
        return (
          <ItalicText
            color={chosenColor}
            style={{ lineHeight: lineHeight }}
            size={size}
          >
            {children}
          </ItalicText>
        );
      case Fonts.medium:
        return (
          <MediumText
            color={chosenColor}
            style={{ lineHeight: lineHeight }}
            size={size}
          >
            {children}
          </MediumText>
        );
      case Fonts.mediumItalic:
        return (
          <MediumItalicText
            color={chosenColor}
            style={{ lineHeight: lineHeight }}
            size={size}
          >
            {children}
          </MediumItalicText>
        );
      case Fonts.semiBold:
        return (
          <SemiBoldText
            color={chosenColor}
            style={{ lineHeight: lineHeight }}
            size={size}
          >
            {children}
          </SemiBoldText>
        );
      case Fonts.semiBoldItalic:
        return (
          <SemiBoldItalicText
            color={chosenColor}
            style={{ lineHeight: lineHeight }}
            size={size}
          >
            {children}
          </SemiBoldItalicText>
        );
    }
  }

  return (
    <Container style={style}>
      {choseFont()}
      {hasSeparator ? (
        <CircleSvg
          color={isSecondary ? colors.purple : colors.white}
          style={{
            marginHorizontal: vw(1.5),
            bottom: vh(0.1),
          }}
        />
      ) : null}
    </Container>
  );
}
