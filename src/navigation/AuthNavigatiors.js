import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import OnBoardingScreen from '../screens/authScreens/OnBoardingScreen';
import ResetPassword from '../screens/authScreens/ResetPassword';
import ActivationPage from '../screens/authScreens/ActivationPage';
import SignUpSuccess from '../screens/authScreens/SignUpSuccess';
import HomeScreen from '../screens/HomeScreen';

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
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}

export default AuthNavigators;
