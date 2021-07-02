import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import OrderList from './views/OrderList/OrderList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailedItem} from './views/DetailedItem/DetailedItem';
import 'react-native-gesture-handler';
import {BACKGROUND_COLOR} from './styles/styles';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: BACKGROUND_COLOR},
});

const App = () => (
  <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName="OrderList">
        <Stack.Screen
          name="OrderList"
          component={OrderList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailedItem"
          component={DetailedItem}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
