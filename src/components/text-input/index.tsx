import React from 'react';
import {
  I18nManager,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import Styles from '@styles';

interface IProps extends TextInputProps {
  variant: 'outlined' | 'normal';
  children?: any;
  endIcon?: any;
}

const CustomTextInput = ({style, endIcon, variant, ...props}: IProps) => {
  return (
    <View
      style={StyleSheet.flatten([
        styleLayouts.root,
        variant === 'outlined' && styleTypes.outlined,
        style,
      ])}>
      <TextInput style={{flex: 1, padding: 0}} {...props} />
      {endIcon && <View style={styleLayouts.endIcon}>{endIcon}</View>}
    </View>
  );
};

CustomTextInput.defaultProps = {
  variant: 'normal',
  maxLength: 100,
  placeholderTextColor: Styles.text.secondaryColor,
};

const styleLayouts = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: Styles.normalize(14),
    fontFamily: Styles.fontFamily.regular,
    borderRadius: Styles.radius.button,
    paddingVertical: Styles.gutter.component,
    paddingHorizontal: Styles.gutter.container,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  endIcon: {
    marginLeft: Styles.gutter.text,
  },
});

const styleTypes = StyleSheet.create({
  outlined: {
    borderColor: Styles.borderColor,
    borderWidth: 1,
  },
});

export {CustomTextInput as TextInput};
