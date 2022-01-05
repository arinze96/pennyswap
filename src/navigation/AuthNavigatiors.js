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


const Auth = createStackNavigator();

function AuthNavigators() {
  return (
    <Auth.Navigator>
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
