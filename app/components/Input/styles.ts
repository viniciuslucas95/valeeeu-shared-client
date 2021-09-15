import styled from 'styled-components/native';
import { colors, sizes } from '../../../configs';
import { Sizes } from '../../enums';
import { Unit } from '../../helpers';
import { Size } from '../../helpers/Size';
import { IHaveSize } from '../../interfaces';

const { vhPx, vwPx } = Unit;

export const Container = styled.TextInput<IHaveSize>`
  width: ${({ width }) => width};
  height: ${({ size }) => Size.getButtonHeight(size)};
  border: ${sizes.border} solid ${colors.purple};
  border-radius: ${vwPx(10)};
  background-color: ${colors.white};
  padding: ${vhPx(1)} ${vwPx(4)} ${vhPx(0.5)} ${vwPx(4)};
  font-family: 'Poppins-Light';
  font-size: ${({ size }) => Size.getTextSize(size)};
  color: ${colors.purple};
`;
