import React, {useState} from 'react';
import {Image, ImageProps, StyleSheet, View} from 'react-native';

interface IProps extends ImageProps {
  onPress?: any;
}

const CustomImage = ({source, ...props}: IProps) => {
  const [state, setState] = useState({
    error: false,
  });

  const onError = () => {
    setState(prevState => ({...prevState, error: true}));
  };

  if (state.error) {
    return <View style={[props.style, styles.empty]}></View>;
  }

  if (!source) {
    return null;
  }

  return (
    // @ts-ignore
    <Image {...props} source={source} onError={onError} />
  );
};

CustomImage.defaultProps = {
  resizeMode: 'stretch',
};

const styles = StyleSheet.create({
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {CustomImage as Image};
