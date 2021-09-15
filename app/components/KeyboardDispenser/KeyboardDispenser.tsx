import React, { PropsWithChildren } from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

export function KeyboardDispenser({ children }: PropsWithChildren<any>) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
