import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import {Text} from '../text';
import {TouchableOpacity} from '../touchable-opacity.component';

import Styles from '@styles';

interface IProps extends TouchableOpacityProps {
  label?: string;
  styleText?: any;
  variant: 'outlined' | 'contained' | 'link';
  color: 'secondary' | 'primary' | 'default';
  children?: any;
  loading?: boolean;
}

const Button = ({
  style,
  styleText,
  disabled,
  label,
  variant,
  children,
  color,
  loading,
  ...props
}: IProps) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={StyleSheet.flatten([
        styleLayouts.root,
        color === 'primary' && styleTypes.containedPrimary,
        color === 'secondary' && styleTypes.containedSecondary,
        color === 'default' && styleTypes.containedDefault,
        disabled && styleTypes.disabled,
        style,
      ])}
      {...props}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {children}
          {label && (
            <Text
              style={StyleSheet.flatten([
                styleTypes.text,
                variant === 'contained' && styleTypes.containedText,
                color === 'primary' && styleTypes.containedTextPrimary,
                styleText,
              ])}>
              {label}
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  variant: 'contained',
  color: 'default',
};

const styleLayouts = StyleSheet.create({
  root: {
    borderRadius: Styles.radius.button,
    paddingVertical: Styles.gutter.component,
    paddingHorizontal: Styles.gutter.container,
  },
});

const styleTypes = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: Styles.fontFamily.semiBold,
    fontSize: Styles.normalize(16),
  },

  containedDefault: {
    backgroundColor: '#fff',
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },

  containedPrimary: {
    backgroundColor: Styles.palette.primary.main,
  },

  containedSecondary: {
    backgroundColor: Styles.palette.secondary.main,
  },

  containedText: {
    fontFamily: Styles.fontFamily.medium,
  },
  containedTextPrimary: {
    color: '#fff',
  },

  disabled: {
    backgroundColor: '#acacac',
  },
});

export {Button};
