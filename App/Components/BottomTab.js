import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { height, layout, width } from '../DesignTokens/layout';
import CustomText from './Text';
import { colors } from '../DesignTokens/colors';
export const tabBarHeight = height * 0.211 * 0.47;

const BottomTab = ({ state, descriptors, navigation }) => {
  const styles = useStyles();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
        },
      );

      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }
  }, []);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  if (isKeyboardVisible) {
    return null;
  }
  return (
    <View style={[styles.containerStyle]}>
      <View
        style={{
          backgroundColor: colors.white,
          elevation: 8,
          borderWidth: 1,
          borderColor: layout.borderColor,
          // borderTopWidth: 0.5,
          justifyContent: 'space-between',
          paddingHorizontal: width * 0.12,
          // borderLeftWidth: 0.5,
          // borderRightWidth: 0.5,
          borderColor: layout.borderColor,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: tabBarHeight,
          flexDirection: 'row',
          width: '100%',
          alignSelf: 'center',
          flexDirection: 'row',
          paddingTop: 15,
          // marginBottom: 20,
        }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const icon =
            options.tabBarIcon !== undefined
              ? options.tabBarIcon(isFocused, 'red', 10)
              : null;

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.itemStyle}
              activeOpacity={1}>
              {icon}
              <View style={styles.textContainer}>
                <CustomText
                  style={[
                    {
                      color: isFocused ? colors.blue : colors.gray[400],
                    },
                    styles.text,
                  ]}>
                  {label}
                </CustomText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTab;

const useStyles = () => {
  return StyleSheet.create({
    containerStyle: {
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    itemStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: "red",
      width: 100,
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',

      bottom: 5,
    },
    text: {
      fontFamily: 'IranianSans',
      marginTop: 8,
      textAlign: 'center',
    },
  });
};
