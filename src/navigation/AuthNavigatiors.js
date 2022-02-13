import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import OnBoardingScreen from '../screens/authScreens/OnBoardingScreen';
import ResetPassword from '../screens/authScreens/ResetPassword';
import ActivationPage from '../screens/authScreens/ActivationPage';
import SignUpSuccess from '../screens/authScreens/SignUpSuccess';
import HomeScreen from '../screens/HomeScreen';
import NewsList from '../screens/NewsList';
import AllNews from '../screens/AllNews';
import FullNews from '../screens/FullNews';
import ExchangeCrypto from '../screens/ExchangeCrypto';
import PtoP from '../screens/PtoP';
import ReceiveCrypto from '../screens/ReceiveCrypto';
import SendCrypto from '../screens/SendCrypto';
import RootClientTabs from './ClientTabs';
import VerificationPage from '../screens/authScreens/VerificationPage';
import CryptoSentSuccessScreen from '../screens/authScreens/CryptoSentSuccessScreen';
import BuyRequestScreen from '../screens/authScreens/BuyRequestScreen';
import ExchangeConfirmedScreen from '../screens/authScreens/ExchangeConfirmedScreen';
import OnboardingScreen from '../components/OnboardingScreen';

const Auth = createStackNavigator();

function AuthNavigators() {
  return (
    <Auth.Navigator>
        <Auth.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="ActivationPage"
        component={ActivationPage}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignUpSuccess"
        component={SignUpSuccess}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="NewsList"
        component={NewsList}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="AllNews"
        component={AllNews}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="FullNews"
        component={FullNews}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="ExchangeCrypto"
        component={ExchangeCrypto}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="PtoP"
        component={PtoP}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="ReceiveCrypto"
        component={ReceiveCrypto}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SendCrypto"
        component={SendCrypto}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="VerificationPage"
        component={VerificationPage}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="CryptoSentSuccessScreen"
        component={CryptoSentSuccessScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="BuyRequestScreen"
        component={BuyRequestScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="ExchangeConfirmedScreen"
        component={ExchangeConfirmedScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}

export default AuthNavigators;
