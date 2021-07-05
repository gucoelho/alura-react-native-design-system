import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
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
import {ItensContext} from '../../../providers/DataContextProvider';

const styles = StyleSheet.create({
  itemContainer: {flex: 5, marginTop: -60},
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
  const {addItem} = useContext(ItensContext);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosition}>
        <View style={styles.item}>
          <View style={styles.textPosition}>
            <View>
              <Text style={styles.header}>{estudio}</Text>
              <Text style={styles.name}>{itemName}</Text>
              <Text style={styles.title}>{titulo}</Text>
            </View>
            <Image source={imagem} style={styles.image} />
          </View>
          <Text style={styles.desc}>{itemDesc}</Text>
          <View style={styles.footer}>
            <Text style={styles.price}>{formatValue(preco)}</Text>
            <Button
              label="COMPRAR"
              onPress={() => {
                addItem({...item});
                navigation.push('Checkout');
              }}></Button>
          </View>
        </View>
      </View>
    </View>
  );
};
