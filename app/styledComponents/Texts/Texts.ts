import styled from 'styled-components/native';
import { colors } from '../../../configs';
import { Sizes } from '../../enums';
import { Size } from '../../helpers/Size';
import { IColorable, IHaveSize } from '../../interfaces';

interface IProps extends Partial<IColorable>, Partial<IHaveSize> {}

export const LightText = styled.Text<IProps>`
  font-family: 'Poppins-Light';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) => Size.getTextSize(size ?? Sizes.medium)};
`;

export const LightItalicText = styled.Text<IProps>`
  font-family: 'Poppins-LightItalic';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) => Size.getTextSize(size ?? Sizes.medium)};
`;

export const RegularText = styled.Text<IProps>`
  font-family: 'Poppins-Regular';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) => Size.getTextSize(size ?? Sizes.medium)};
`;

export const ItalicText = styled.Text<IProps>`
  font-family: 'Poppins-Italic';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) => Size.getTextSize(size ?? Sizes.medium)};
`;

export const MediumText = styled.Text<IProps>`
  font-family: 'Poppins-Medium';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) => Size.getTextSize(size ?? Sizes.medium)};
`;

export const MediumItalicText = styled.Text<IProps>`
  font-family: 'Poppins-MediumItalic';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) => Size.getTextSize(size ?? Sizes.medium)};
`;

export const SemiBoldText = styled.Text<IProps>`
  font-family: 'Poppins-SemiBold';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) => Size.getTextSize(size ?? Sizes.medium)};
`;

export const SemiBoldLightText = styled.Text<IProps>`
  font-family: 'Poppins-SemiBoldLight';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) => Size.getTextSize(size ?? Sizes.medium)};
`;
