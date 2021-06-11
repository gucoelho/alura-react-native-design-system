import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import OrderList from './views/OrderList';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F4F0F4'},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  bagContainer: {backgroundColor: 'white', padding: 18, borderRadius: 50},
  title: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
  },
  image: {
    width: 30,
    height: 30,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA'
  },
  dividerContainer: {
    paddingHorizontal: 24
  },
  dividerLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46
  },
  dividerLabel: {
    padding: 34,
    backgroundColor: '#F4F0F4',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#A1A5AA'
  }
});

const App = () => (
  <SafeAreaView style={styles.container}>
   <OrderList /> 
  </SafeAreaView>
);

export default App;
