import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ImageBackground} from 'react-native';
import Bag from '../../shared/components/Bag/Bag';
import Button from '../../shared/components/Button/Button';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_SIZE_X_LARGE,
  WHITE,
} from '../../styles/styles';

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
import {formatValue} from '../../utils/utils';

export const Background = () => {
  const imgSrc = require('../../assets/images/bgimg.jpg');
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
              source={require('../../assets/images/flecha-esquerda.png')}
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

const stylesDesc = StyleSheet.create({
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
    <View style={stylesDesc.itemContainer}>
      <View style={stylesDesc.itemPosition}>
        <View style={stylesDesc.item}>
          <View style={stylesDesc.textPosition}>
            <View>
              <Text style={stylesDesc.header}>{estudio}</Text>
              <Text style={stylesDesc.name}>{itemName}</Text>
              <Text style={stylesDesc.title}>{titulo}</Text>
            </View>
            <Image source={imagem} style={stylesDesc.image} />
          </View>
          <Text style={stylesDesc.desc}>{itemDesc}</Text>
          <View style={stylesDesc.footer}>
            <Text style={stylesDesc.price}>{formatValue(preco)}</Text>
            <Button
              label="COMPRAR"
              onPress={() => navigation.push('Checkout')}></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export const DetailedItem = ({route}) => {
  const {item} = route.params;

  return (
    <>
      <Background />
      <ItemDescription item={item} />
    </>
  );
};
