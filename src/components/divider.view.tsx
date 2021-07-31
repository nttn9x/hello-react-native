import React from 'react';
import {StyleSheet, View} from 'react-native';

import Styles from '@Styles';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Styles.palette.divider,
  },
});

export {Divider};
