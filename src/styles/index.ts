import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const scale = (size: number) => (width / 376) * size;

const verticalScale = (size: number) => size;
const horizontalScale = (size: number) => size;

const normalize = (size: number) => {
  const newSize = scale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const theme = {
  colors: {
    primary: '#2F54EB',
    secondary: '#448AFF',
  },
};

export default {
  dimensions: {
    width,
    height,
  },

  palette: {
    primary: {
      main: '#2F54EB',
    },
    secondary: {
      main: '#448AFF',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
    error: '#FF4D4F',
  },
  text: {
    primaryColor: '#262626',
    secondaryColor: '#888888',
    thirdColor: '#999999',
  },
  white: '#FFFFFF',
  backgroundBody: '#f5f5f5',
  backgroundPaper: '#fff',

  borderColor: '#D9D9D9',
  dividerColor: '#f4f4f4',

  radius: {
    button: 4,
    image: 4,
    input: 4,
    card: 4,
  },

  gutter: {
    text: 4,
    component: 8,
    container: 16,
  },

  fontFamily: {
    light: 'OpenSans',
    medium: 'OpenSans-Regular',
    regular: 'OpenSans-Regular',
    semiBold: 'OpenSans-SemiBold',
    bold: 'OpenSans-Bold',
    boldItalic: 'OpenSans-BoldItalic',
    black: 'OpenSans-Black',
  },
  fontSize: {
    icon: normalize(20),
    body: normalize(14),
    body2: normalize(12),
    title: normalize(20),
    numberMini: normalize(12),
    h1: normalize(32),
    h2: normalize(28),
    h3: normalize(24),
    h4: normalize(22),
    h5: normalize(18),
    h6: normalize(16),
  },

  verticalScale,
  horizontalScale,
  normalize,
  scale,
};
