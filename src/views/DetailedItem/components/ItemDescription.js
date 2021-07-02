import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_SIZE_X_LARGE,
  WHITE,
} from '../../../styles/styles';

import Button from '../../../shared/components/Button/Button';
import {formatValue} from '../../../utils/utils';

const style = StyleSheet.create({
  itemContainer: {flex: 4, marginTop: -60},
  itemPosition: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  textPosition: {flexDirection: 'row', justifyContent: 'space-between'},
  image: {width: 30, height: 72},
  header: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },
  name: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 4,
  },
  title: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    marginBottom: 12,
    color: '#CACACA',
  },
  desc: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    marginTop: 6,
    color: '#ACAAAB',
  },
  price: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const ItemDescription = ({item}) => {
  const {itemName, estudio, titulo, imagem, itemDesc, preco} = item;
  const navigation = useNavigation();

  return (
    <View style={style.itemContainer}>
      <View style={style.itemPosition}>
        <View style={style.item}>
          <View style={style.textPosition}>
            <View>
              <Text style={style.header}>{estudio}</Text>
              <Text style={style.name}>{itemName}</Text>
              <Text style={style.title}>{titulo}</Text>
            </View>
            <Image source={imagem} style={style.image} />
          </View>
          <Text style={style.desc}>{itemDesc}</Text>
          <View style={style.footer}>
            <Text style={style.price}>{formatValue(preco)}</Text>
            <Button
              label="COMPRAR"
              onPress={() => navigation.push('Checkout')}></Button>
          </View>
        </View>
      </View>
    </View>
  );
};