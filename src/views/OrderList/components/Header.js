import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BLACK,
  FONT_FAMILY_EXTRA_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_XX_LARGE,
} from '../../../styles/styles';
import Bag from '../../../shared/components/Bag/Bag';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: BACKGROUND_COLOR},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 6,
  },
  title: {
    fontFamily: FONT_FAMILY_EXTRA_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
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
      <Bag />
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
