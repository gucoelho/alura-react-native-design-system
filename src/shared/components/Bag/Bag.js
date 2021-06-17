import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {WHITE} from '../../../styles/styles';

const styles = StyleSheet.create({
  bagContainer: {backgroundColor: WHITE, padding: 18, borderRadius: 50},
  image: {
    width: 30,
    height: 30,
  },
});

const Bag = () => {
  return (
    <View style={styles.bagContainer}>
      <Image
        source={require('../../../assets/images/icone-sacola.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Bag;
