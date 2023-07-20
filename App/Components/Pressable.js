//@ts-nocheck
import React, { FC, memo } from 'react';
import { Platform, Pressable, TouchableOpacity } from 'react-native';
import { colors } from '../DesignTokens/colors';

const CustomPressable = memo(props => {
  const {
    backgroundColor,
    rippleBackgroundColor,
    wrapperStyle,
    borderless = false,
    onPress,
  } = props;

  const renderContent = () => {
    if (Platform.OS === 'android') {
      return (
        <Pressable
          onPress={onPress}
          style={wrapperStyle}
          android_ripple={{
            color: rippleBackgroundColor ? rippleBackgroundColor : colors.white,
            borderless: borderless,
          }}
        // {...props}
        >
          {props.children}
        </Pressable>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          {...props}
          style={[{ backgroundColor }, wrapperStyle]}>
          {props.children}
        </TouchableOpacity>
      );
    }
  };

  return <>{renderContent()}</>;
});
export default CustomPressable;
