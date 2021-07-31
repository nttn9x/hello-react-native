import React from 'react';

import {StyleSheet, TextInputProps, View} from 'react-native';

import Styles from '@styles';

import {Text} from './text';
import {TextInput} from './text-input';

interface InputProps extends TextInputProps {
  variant: 'outlined' | 'normal';
  children?: any;
  endIcon?: any;
}

interface IProps {
  label?: string;
  inputProps?: InputProps;
  title?: string;
  gutterBottom?: boolean;
  style?: any;
}

const FieldInput = ({label, style, inputProps, gutterBottom}: IProps) => {
  return (
    <View style={[styles.root, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...inputProps} />
      {gutterBottom && <View style={styles.divider} />}
    </View>
  );
};

FieldInput.defaultProps = {
  inputProps: {},
};

const styles = StyleSheet.create({
  label: {
    marginBottom: Styles.gutter.component,
  },
  divider: {
    height: Styles.gutter.container,
  },
  root: {flex: 1},
});

export {FieldInput};
