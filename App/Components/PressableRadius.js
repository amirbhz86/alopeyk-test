//@ts-nocheck
import React, { memo } from 'react';
import { Platform, Pressable, TouchableOpacity, View } from 'react-native';
import { colors } from '../DesignTokens/colors';

// height and width > innerStyle
// borderRadius > wrapperStyle
// padding > innerStyle
// margin ? wrapperStyle

const PressableRadius = memo(props => {
  const {
    backgroundColor,
    rippleBackgroundColor,
    innerStyle,
    wrapperStyle,
    borderless = true,
    onPress,
  } = props;
  const renderContent = () => {
    if (Platform.OS === 'android') {
      return (
        <View style={[wrapperStyle, { overflow: 'hidden' }]}>
          <Pressable
            onPress={onPress}
            style={[innerStyle]}
            android_ripple={{
              color: rippleBackgroundColor
                ? rippleBackgroundColor
                : colors.white,
              borderless: borderless,
            }}
            {...props}>
            {props.children}
          </Pressable>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          {...props}
          style={[{ backgroundColor }, wrapperStyle, innerStyle]}>
          {props.children}
        </TouchableOpacity>
      );
    }
  };

  return <>{renderContent()}</>;
});
export default PressableRadius;
