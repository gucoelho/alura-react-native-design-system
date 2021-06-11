import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F4F0F4'},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  bagContainer: {backgroundColor: 'white', padding: 18, borderRadius: 30},
  title: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
  },
  image: {
    width: 30,
    height: 30,
  },
});

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Lighteria</Text>
      <View style={styles.bagContainer}>
        <Image
          source={require('./assets/images/icone-sacola.png')}
          style={styles.image}
        />
      </View>
    </View>
  </SafeAreaView>
);

export default App;
