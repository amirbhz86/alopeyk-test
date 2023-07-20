import React from 'react';
import { StyleProp, Text } from 'react-native';
import { colors } from '../DesignTokens/colors';
// import colors from '../DesignTokens/colors';

const CustomText = ({
  children = '',
  light = false,
  style,
  colorTone = 700,
  bold,
  ...restProps
}) => {
  const textColor = light ? 'white' : colors.gray[colorTone];
  return (
    <Text
      {...restProps}
      style={[
        {
          color: textColor,
          textAlign: 'right',
          fontFamily: bold ? 'IRANSansBold' : 'IranianSans',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
