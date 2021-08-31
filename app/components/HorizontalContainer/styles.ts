import styled from 'styled-components/native';
import { IHaveFlexDistribution } from '../../interfaces';

interface IProps extends IHaveFlexDistribution {}

export const Container = styled.View<IProps>`
  flex-direction: row;
  align-items: center;
  justify-content: ${({ flexDistribution }) => flexDistribution};
`;
