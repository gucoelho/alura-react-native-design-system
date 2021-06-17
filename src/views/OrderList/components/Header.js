import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BLACK,
  FONT_FAMILY_EXTRA_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  WHITE,
} from '../../../styles/styles';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: BACKGROUND_COLOR},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 6,
  },
  bagContainer: {backgroundColor: WHITE, padding: 18, borderRadius: 50},
  title: {
    fontFamily: FONT_FAMILY_EXTRA_BOLD,
    fontSize: FONT_SIZE_LARGE,
  },
  image: {
    width: 30,
    height: 30,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
  },
  dividerContainer: {},
  dividerLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  dividerLabel: {
    padding: 34,
    backgroundColor: BACKGROUND_COLOR,
    fontSize: FONT_SIZE_MEDIUM,
    fontFamily: FONT_FAMILY_REGULAR,
    color: BLACK,
  },
});

const Header = () => (
  <>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Lighteria</Text>
      <View style={styles.bagContainer}>
        <Image
          source={require('../../../assets/images/icone-sacola.png')}
          style={styles.image}
        />
      </View>
    </View>
    <View style={styles.dividerContainer}>
      <View style={styles.divider} />
      <View style={styles.dividerLabelContainer}>
        <Text style={styles.dividerLabel}>Categoria</Text>
      </View>
    </View>
  </>
);

export default Header;
