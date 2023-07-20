import { colors } from './colors';

const { Dimensions, Platform } = require('react-native');

const { width, height } = Dimensions.get('screen');

const layout = {
  generalRadius: 8,
  borderColor: colors.gray[200],
};

const isIos = Platform.OS === 'ios';

export { width, height, layout, isIos };
