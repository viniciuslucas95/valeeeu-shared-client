import styled from 'styled-components/native';
import { colors } from '../../../configs';
import { Fonts } from '../../enums';
import { Unit } from '../../helpers';
import { Size } from '../../helpers/Size';
import { IColorable, IHaveSize } from '../../interfaces';

const { vhPx } = Unit;

interface IProps extends Omit<IColorable, 'color'>, Omit<IHaveSize, 'width'> {
  isHighlighted?: boolean;
}

export const Container = styled.View``;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const Text = styled.Text<IProps>`
  font-family: ${Fonts.semiBold};
  color: ${({ isHighlighted, isSecondary }) =>
    isHighlighted
      ? isSecondary
        ? colors.whiteHighlightStronger
        : colors.purpleHighlight
      : isSecondary
      ? colors.white
      : colors.purpleLighter};
  font-size: ${({ size }) => Size.getTextSize(size)};
  position: relative;
  top: ${vhPx(0.15)};
`;
