import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ItensContext} from '../../providers/DataContextProvider';
import {
  ACCENT,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
  WHITE,
  FONT_SIZE_X_LARGE,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_MEDIUM,
  FONT_FAMILY_LIGHT,
} from '../../styles/styles';
import {formatValue} from '../../utils/utils';
import Button from '../../shared/components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
    marginBottom: 10,
  },
  containerNames: {
    flex: 3,
    padding: 10,
  },
  containerImage: {
    backgroundColor: '#F7F8FC',
    flex: 1,
    alignItems: 'center',
  },
  image: {width: 40, height: 60, resizeMode: 'contain'},
  listItens: {
    padding: 0,
  },
  numberContainers: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end',
  },
  page: {padding: 25},
  keepShopping: {
    color: ACCENT,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_SMALL,
    marginTop: 20,
  },
  total: {
    fontSize: FONT_SIZE_LARGE,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    marginVertical: 36,
  },
  numbers: {fontFamily: FONT_FAMILY_REGULAR, fontSize: FONT_SIZE_SMALL},
  name: {fontFamily: FONT_FAMILY_SEMI_BOLD, fontSize: FONT_SIZE_MEDIUM},
  company: {fontFamily: FONT_FAMILY_LIGHT, fontSize: FONT_SIZE_SMALL},
});

const Title = ({children}) => <Text style={styles.title}>{children}</Text>;

const Item = ({item}) => (
  <View key={item.id} style={styles.item}>
    <View style={styles.containerImage}>
      <Image source={item.imagem} style={styles.image} />
    </View>
    <View style={styles.containerNames}>
      <Text style={styles.name}>{item.itemName}</Text>
      <Text style={styles.company}>{item.estudio}</Text>
    </View>
    <View style={styles.numberContainers}>
      <Text style={styles.numbers}>
        {formatValue(item.preco * item.quantidade)}
      </Text>
      <Text style={styles.numbers}>Qtd: {item.quantidade}</Text>
    </View>
  </View>
);

const Total = ({children}) => (
  <Text style={styles.total}>Total: {children}</Text>
);

const Checkout = () => {
  const {itensCheckout} = useContext(ItensContext);
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Title>Checkout</Title>
      <View style={styles.listItens}>
        {itensCheckout.map(i => (
          <Item key={i.id} item={i} />
        ))}
      </View>
      <Total>
        {formatValue(
          itensCheckout.reduce(
            (acc, item) => acc + item.preco * item.quantidade,
            0,
          ),
        )}
      </Total>
      <Button label="FINALIZAR COMPRA" />
      <TouchableOpacity onPress={() => navigation.push('OrderList')}>
        <Text style={styles.keepShopping}>Continuar comprando</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
