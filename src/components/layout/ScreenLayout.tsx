import React from 'react';

import {StyleSheet, View} from 'react-native';
import Styles from '@styles';

const ScreenLayout = ({style, ...props}: any) => {
  return <View style={[styles.root, style]} {...props} />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Styles.backgroundPaper,
  },
});

export {ScreenLayout};
