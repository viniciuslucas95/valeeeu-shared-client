import styled from 'styled-components/native';
import { colors, sizes } from '../../../../configs';
import { Sizes } from '../../components/enums';

interface IProps {
  size?: Sizes;
  color?: string;
}

export const LightText = styled.Text<IProps>`
  font-family: 'Poppins-Light';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : size === Sizes.huge
      ? sizes.textHuge
      : sizes.textMedium};
`;

export const LightItalicText = styled.Text<IProps>`
  font-family: 'Poppins-LightItalic';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : size === Sizes.huge
      ? sizes.textHuge
      : sizes.textMedium};
`;

export const RegularText = styled.Text<IProps>`
  font-family: 'Poppins-Regular';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : size === Sizes.huge
      ? sizes.textHuge
      : sizes.textMedium};
`;

export const ItalicText = styled.Text<IProps>`
  font-family: 'Poppins-Italic';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : size === Sizes.huge
      ? sizes.textHuge
      : sizes.textMedium};
`;

export const MediumText = styled.Text<IProps>`
  font-family: 'Poppins-Medium';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : size === Sizes.huge
      ? sizes.textHuge
      : sizes.textMedium};
`;

export const MediumLightText = styled.Text<IProps>`
  font-family: 'Poppins-MediumLight';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : size === Sizes.huge
      ? sizes.textHuge
      : sizes.textMedium};
`;

export const SemiBoldText = styled.Text<IProps>`
  font-family: 'Poppins-SemiBold';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : size === Sizes.huge
      ? sizes.textHuge
      : sizes.textMedium};
`;

export const SemiBoldLightText = styled.Text<IProps>`
  font-family: 'Poppins-SemiBoldLight';
  color: ${({ color }) => color ?? colors.white};
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : size === Sizes.huge
      ? sizes.textHuge
      : sizes.textMedium};
`;
