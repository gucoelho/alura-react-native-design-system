import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import OrderList from './views/OrderList/OrderList';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F4F0F4'},
});

const App = () => (
  <SafeAreaView style={styles.container}>
   <OrderList /> 
  </SafeAreaView>
);

export default App;
