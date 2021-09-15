import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { LoginScreens } from './enums';
import { LoginPage } from '..';
import { CreateAccountPage } from '../CreateAccountPage';
import { Header } from '../../components';
import { BackButton } from '../../components/Header/HeaderButtons';

const Stack = createStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name={LoginScreens.Login}>
        {({ navigation }) => <LoginPage navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name={LoginScreens.CreateAccount}>
        {({ navigation }) => <CreateAccountPage navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
