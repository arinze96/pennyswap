import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {colors} from '../global/styles';
import Svg, {G, Circle} from 'react-native-svg';
import {Icon} from 'react-native-elements';

function NextButton({percentage}) {
  const size = 128;

  const strokeWidth = 2;

  const center = size / 2;

  const radius = size / 2 - strokeWidth / 2;

  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;

  const progressRef = useRef(null);


  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },[percentage]);
  });

  return (
    <View style={styles.container}>
        <Svg width={size} height={size}>
          <G rotation="-90" origin={center}>
            <Circle
              stroke="#E6E7E8"
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <Circle
              ref={progressRef}
              stroke={colors.lightPink}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
            //   strokeDashoffset={circumference - (circumference * 25) / 100}
            />
          </G>
        </Svg>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <Icon
            name="east"
            size={34}
            color="#210A54"
            onPress={() => {
              // navigation.goBack();
            }}
          />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: colors.lightPink,
    borderRadius: 100,
    padding: 20,
  },
});

export default NextButton;
