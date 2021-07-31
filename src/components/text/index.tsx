import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import Styles from '@styles';

interface IProps extends TextProps {
  children?: any;
  color: 'textSecondary' | 'textPrimary' | 'primary' | 'secondary';
  variant:
    | 'body'
    | 'body2'
    | 'title'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subTitle1'
    | 'subTitle2';
  align?: 'center';
}

const CustomText = ({style, color, variant, align, ...props}: IProps) => {
  return (
    <Text
      style={StyleSheet.flatten([
        styles.text,
        align === 'center' && styles.align,
        color === 'primary' && styles.primary,
        color === 'secondary' && styles.secondary,
        color === 'textSecondary' && styles.textSecondary,
        styleVariants[variant],
        style,
      ])}
      {...props}
    />
  );
};

CustomText.defaultProps = {
  variant: 'body',
  color: 'textPrimary',
  numberOfLines: 1,
};

const styles = StyleSheet.create({
  align: {
    textAlign: 'center',
  },
  text: {
    fontFamily: Styles.fontFamily.regular,
    fontSize: Styles.fontSize.body,
    color: Styles.text.primaryColor,
  },
  textSecondary: {
    color: Styles.text.secondaryColor,
  },
  primary: {
    color: Styles.palette.primary.main,
  },
  secondary: {
    color: Styles.palette.secondary.main,
  },
});

const styleVariants = StyleSheet.create({
  body: {
    fontSize: Styles.fontSize.body,
    lineHeight: 22,
  },
  body2: {
    fontSize: Styles.fontSize.body2,
    lineHeight: 20,
  },
  title: {
    fontSize: Styles.fontSize.title,
    fontFamily: Styles.fontFamily.semiBold,
  },
  subTitle1: {
    fontSize: Styles.normalize(14),
    fontFamily: Styles.fontFamily.semiBold,
    lineHeight: 22,
  },
  subTitle2: {
    fontSize: Styles.normalize(12),
    fontFamily: Styles.fontFamily.semiBold,
    lineHeight: 20,
  },
  h1: {
    fontSize: Styles.fontSize.h1,
    fontFamily: Styles.fontFamily.bold,
  },
  h2: {
    fontSize: Styles.fontSize.h2,
    fontFamily: Styles.fontFamily.regular,
  },
  h3: {
    fontSize: Styles.fontSize.h3,
    fontFamily: Styles.fontFamily.bold,
  },
  h4: {
    fontSize: Styles.fontSize.h4,
    fontFamily: Styles.fontFamily.medium,
  },
  h5: {
    fontSize: Styles.fontSize.h5,
    fontFamily: Styles.fontFamily.regular,
  },
  h6: {
    fontSize: Styles.fontSize.h6,
    fontFamily: Styles.fontFamily.semiBold,
  },
});

export {CustomText as Text};
