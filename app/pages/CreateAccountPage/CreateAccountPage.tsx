import React from 'react';
import { Container } from './styles';
import { Unit } from '../../helpers';
import { LogoSvg } from '../../../assets/svgs';
import { Sizes } from '../../enums';
import { Separator } from '../../components/SeparatorContainer/Separator';
import { Button, Input, KeyboardDispenser } from '../../components';
import { INavigate } from '../../interfaces';

const { vh, vwPx, vw } = Unit;

export function CreateAccountPage({ navigation }: INavigate) {
  return (
    <KeyboardDispenser>
      <Container>
        <LogoSvg size={vw(1.1)} />
        <Separator style={{ marginTop: vh(4) }} width={vwPx(90)}>
          Criar Conta
        </Separator>
        <Input
          style={{ marginTop: vh(1.5) }}
          width={vwPx(90)}
          placeholderText='Nome'
          size={Sizes.big}
        />
        <Input
          style={{ marginTop: vh(1) }}
          width={vwPx(90)}
          placeholderText='Sobrenome'
          size={Sizes.big}
        />
        <Input
          style={{ marginTop: vh(1) }}
          width={vwPx(90)}
          placeholderText='Email'
          size={Sizes.big}
        />
        <Input
          style={{ marginTop: vh(1) }}
          width={vwPx(90)}
          placeholderText='Senha'
          isSecure={true}
          size={Sizes.big}
        />
        <Button
          style={{ marginTop: vh(2), marginBottom: vh(8) }}
          width={vwPx(90)}
          onPress={() => console.log('create account pressed')}
          size={Sizes.big}
        >
          Criar Conta
        </Button>
        <Button
          style={{ position: 'absolute', bottom: vh(4) }}
          width={vwPx(90)}
          onPress={() => navigation.goBack()}
          size={Sizes.big}
          isSecondary
        >
          Voltar
        </Button>
      </Container>
    </KeyboardDispenser>
  );
}
