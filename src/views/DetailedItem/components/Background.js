import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ImageBackground} from 'react-native';
import Bag from '../../../shared/components/Bag/Bag';

const styles = StyleSheet.create({
  imageBackground: {width: Dimensions.get('window').width, height: '100%'},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  bgContainer: {flex: 6},
  arrow: {height: 24, width: 24},
});

export const Background = () => {
  const imgSrc = require('../../../assets/images/bgimg.jpg');
  const navigation = useNavigation();
  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.imageBackground}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/images/flecha-esquerda.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <View>
            <Bag />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
