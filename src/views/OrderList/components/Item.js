import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_SMALL,
  WHITE,
} from '../../../styles/styles';

const styles = StyleSheet.create({
  image: {height: 64},
  containerItem: {
    height: 168,
    backgroundColor: WHITE,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  text: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: '#848486',
  },
});

const Item = item => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() => navigation.push('DetailedItem', {item})}>
      <Image source={item.imagem} style={styles.image} resizeMode="contain" />
      <Text>{item.titulo}</Text>
    </TouchableOpacity>
  );
};

export default Item;
