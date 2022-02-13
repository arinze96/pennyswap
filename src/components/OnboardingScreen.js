import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  FlatList,
  StatusBar,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../global/styles';
import {Onboarding} from '../global/Data';
import NextButton from './NextButton';

export default function OnboardingScreen({navigation}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const [indexCheck, setIndexCheck] = useState('0');

  const {width} = useWindowDimensions();


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.gereral} barStyle="dark-content" />
      <View style={{flex: 3}}>
        <FlatList
          data={Onboarding}
          keyExtractor={item => item.id}
          extraData={indexCheck}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          renderItem={({item, index}) => (
            <View style={[styles.container, {width}]}>
              <Image
                source={item.image}
                style={[styles.image, {width, resizeMode: 'contain'}]}
              />

              <View style={{flex: 0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>


      <View style={{flexDirection: 'row', height: 64}}>
            
        {Onboarding.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,

            outputRange: [10, 20, 10],

            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,

            outputRange: [0.3, 1, 0.3],

            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[styles.dot, {width: dotWidth, opacity}]}
              key={i.toString()}
            />
          );
        })}
      </View>
      <NextButton percentage = {(currentIndex + 1) * (100 / Onboarding.length)}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.general,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.major,
    marginHorizontal: 8,
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    // backgroundColor:'green'
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    paddingHorizontal: 20,
    marginBottom: 10,
    color: colors.major,
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    paddingHorizontal: 64,
    color: colors.major,
    textAlign: 'center',
  },
});
