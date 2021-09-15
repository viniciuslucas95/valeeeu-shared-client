import { sizes } from '../../configs';
import { Sizes } from '../enums';

export class Size {
  static getTextSize(size: Sizes) {
    return size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : size === Sizes.huge
      ? sizes.textHuge
      : size === Sizes.tiny
      ? sizes.textTiny
      : sizes.textMedium;
  }

  static getButtonHeight(size: Sizes) {
    return size === Sizes.small
      ? sizes.buttonSmallHeight
      : size === Sizes.big
      ? sizes.buttonBigHeight
      : size === Sizes.huge
      ? sizes.buttonHugeHeight
      : size === Sizes.tiny
      ? sizes.buttonTinyHeight
      : sizes.buttonMediumHeight;
  }
}
