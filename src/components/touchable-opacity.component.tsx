import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface IProps extends TouchableOpacityProps {
  children?: any;
}

const CustomTouchableOpacity = (props: IProps) => {
  return (
    <TouchableOpacity
      hitSlop={{top: 4, bottom: 4, left: 4, right: 4}}
      {...props}
    />
  );
};

export {CustomTouchableOpacity as TouchableOpacity};
