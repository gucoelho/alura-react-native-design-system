import React, {useContext} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {WHITE, RED, FONT_SIZE_X_SMALL} from '../../../styles/styles';
import {ItensContext} from '../../../providers/DataContextProvider';

const styles = StyleSheet.create({
  bagContainer: {backgroundColor: WHITE, padding: 18, borderRadius: 50},
  image: {
    width: 30,
    height: 30,
  },
  quantity: {
    backgroundColor: RED,
    borderRadius: 100,
    marginTop: -10,
    marginLeft: 11,
  },
  textQuantity: {
    textAlign: 'center',
    padding: 4,
    fontSize: FONT_SIZE_X_SMALL,
    color: WHITE,
  },
});

const Bag = () => {
  const navigation = useNavigation();
  const {itensCheckout} = useContext(ItensContext);

  return (
    <TouchableOpacity
      style={styles.bagContainer}
      onPress={() => navigation.push('Checkout')}>
      <Image
        source={require('../../../assets/images/icone-sacola.png')}
        style={styles.image}
      />
      {itensCheckout.length > 0 && (
        <View style={styles.quantity}>
          <Text style={styles.textQuantity}>
            {itensCheckout.reduce((acc, item) => acc + item.quantidade, 0)}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Bag;
