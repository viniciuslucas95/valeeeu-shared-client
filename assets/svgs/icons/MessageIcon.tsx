import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../../app/helpers';
import { colors } from '../../../configs';
import { IProps } from '../interfaces';

const { vw } = Unit;

export function MessageIcon({ size, style }: IProps) {
  const fixedSize = (size ?? vw(1)) / 3;

  return (
    <Svg
      width={24 * fixedSize}
      height={22 * fixedSize}
      viewBox='0 0 24 22'
      fill='none'
      style={style}
    >
      <Path
        d='M3.708 18.458l-.158.578.57-.182c1.055-.338 1.684-.577 2.199-.825.438-.212.79-.428 1.24-.706l.124-.076.174.043c1.128.278 2.455.606 4.233.606 6.012 0 9.835-4.032 9.835-7.888 0-4.44-4.527-7.934-9.925-7.934-5.398 0-9.925 3.493-9.925 7.934 0 2.307 1.031 3.655 2.022 4.843l.004.111c.035 1.07.06 1.838-.393 3.496zM2.37 15.625l-.004-.113-.072-.086a8.495 8.495 0 01-1.97-5.418C.325 4.467 5.773.325 12 .325c6.19 0 11.675 4.112 11.675 9.683 0 4.907-4.642 9.637-11.585 9.637-1.257 0-2.588-.155-3.981-.495l-.132-.032-.115.07c-.802.491-2.113.998-3.568 1.443a39.808 39.808 0 01-3.66.927c.399-.827.795-1.748 1.109-2.666.388-1.136.658-2.294.628-3.268zm4.469-5.46a.96.96 0 111.918 0 .96.96 0 01-1.918 0zm4.2 0a.96.96 0 111.918.001.96.96 0 01-1.918-.002zm4.2 0a.96.96 0 111.918.001.96.96 0 01-1.918-.002z'
        fill={colors.white}
        stroke={colors.purple}
        strokeWidth={0.65}
      />
    </Svg>
  );
}
