import React from 'react';
import {Image, View, StyleSheet, Text, Dimensions} from 'react-native';
import {ImageBackground} from 'react-native';
import Bag from '../../shared/components/Bag/Bag';

const styles = StyleSheet.create({
  imageBackground: {width: Dimensions.get('window').width, height: '100%'},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  bgContainer: {flex: 1.5},
  arrow: {height: 24, width: 24},
});

export const Background = () => {
  const imgSrc = require('../../assets/images/bgimg.jpg');
  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.imageBackground}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/flecha-esquerda.png')}
            style={styles.arrow}
          />
          <View>
            <Bag />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export const ItemDescription = () => {
  return <View />;
};

export const DetailedItem = ({route}) => {
  const {item} = route.params;

  return (
    <>
      <Background />
      <ItemDescription />
    </>
  );
};
