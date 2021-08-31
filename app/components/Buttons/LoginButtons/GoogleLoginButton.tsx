import React, { useState } from 'react';
import {
  Container,
  TouchableContainer,
  TextContainer,
  Plataform,
  Text,
  IconContainer,
  ButtonContainer,
} from './styles';
import { IFetchData } from './interfaces';
import { IStyleable } from '../../../interfaces';
import { GoogleIcon } from '../../../../assets/svgs/icons';

interface IProps extends IStyleable, IFetchData {}

export function GoogleLoginButton({
  isFetchingData,
  fetchDataAsync,
  style,
}: IProps) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <Container {...style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighted(true)}
        onPressOut={() => setIsHighlighted(false)}
        onPress={() => {
          if (isFetchingData) return;

          fetchDataAsync();
        }}
      >
        <ButtonContainer
          plataform={Plataform.Google}
          isHighlighted={isHighlighted}
        >
          <IconContainer>
            <GoogleIcon />
          </IconContainer>
          <TextContainer>
            <Text>Entrar com o Google</Text>
          </TextContainer>
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
