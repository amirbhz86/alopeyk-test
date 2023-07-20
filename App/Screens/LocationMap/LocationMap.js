import React, { memo, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomText from '../../Components/Text';
import { height, layout, width } from '../../DesignTokens/layout';
import { MarkerSVG, SearchSVG } from '../../Assets/Svg/Index';
import PressableRadius from '../../Components/PressableRadius';
import Input from '../../Components/Input/Input';
import { colors } from '../../DesignTokens/colors';
import CustomPressable from '../../Components/Pressable';
import HelperStyles from '../../DesignTokens/HelperStyles';

const Map = props => {
  const {
    searchView,
    mapStyle,
    performanceText,
    inputView,
    inputStyle,
    inputWrapper,
    bottomView,
    locationPress,
    locationInnerStyle,
    selectText,
    markerSvg,
  } = styles();
  const s = styles();
  const { navigation, showButton } = props;
  const [region, setRegion] = useState(undefined);
  const opacityValue = useRef(new Animated.Value(0.5)).current;

  const goToRequests = () => {
    navigation.navigate('STATUS_ORDERS_SCREEN');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <MapView
        style={mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={region => {
          setRegion(region);
        }}
      />
      <MarkerSVG width={40} height={40} style={markerSvg} />
      <View style={s.bottomWrapper}>
        <View style={s.inputContainer}>
          <View style={inputView}>
            <Input
              placeholder={'مقصدد را انتخاب کنید'}
              state="horizontal"
              style={inputWrapper}
              textInputStyle={inputStyle}
            />
            <View style={s.searchContainer}>
              <SearchSVG />
            </View>
          </View>
        </View>
        <View style={s.btnContainer}>
          <View style={s.btnWrapper}>
            <CustomPressable
              onPress={goToRequests}
              wrapperStyle={s.confirmTouchable}>
              <CustomText style={s.confirmText} light>
                {'تایید'}
              </CustomText>
            </CustomPressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Map;

const styles = () => {
  return StyleSheet.create({
    confirmText: {
      fontSize: 16,
    },
    searchContainer: {
      position: 'absolute',
      left: 10,
      top: 10,
    },
    inputContainer: {
      paddingVertical: 16,
    },
    btnContainer: {
      paddingVertical: 16,
      elevation: 1,
      borderTopWidth: 1,
      borderColor: layout.borderColor,
    },
    confirmTouchable: {
      width: '100%',
      height: '100%',
      ...HelperStyles.center,
    },
    btnWrapper: {
      width: '80%',
      alignSelf: 'center',
      backgroundColor: colors.blue,
      borderRadius: layout.generalRadius,
      height: 40,
    },
    bottomWrapper: {
      position: 'absolute',
      width: '100%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: colors.white,
      opacity: 0.85,
      bottom: 0,
    },
    bottomView: {
      bottom: 0,
      width: '100%',
      backgroundColor: '#FFFDFD',
      height: 65,
      position: 'absolute',
    },
    inputWrapper: {
      width: '90%',
      borderWidth: 0,
      height: 30,
    },
    inputStyle: {
      borderWidth: 0,
      textAlign: 'right',

      height: 34,
    },
    inputView: {
      backgroundColor: 'white',
      width: '80%',
      paddingRight: 10,

      paddingLeft: 28,
      borderRadius: layout.generalRadius,
      justifyContent: 'space-between',
      alignIte: 'center',
      height: 39,
      alignSelf: 'center',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      borderWidth: 1,
      borderColor: colors.gray[300],
      // elevation: 2,
    },
    performanceText: {
      textAlign: 'center',
      marginBottom: 20,
    },
    selectText: {
      alignSelf: 'center',
    },
    searchView: {
      paddingVertical: 20,
      width: 300,
      paddingTop: 25,
      paddingBottom: 25,
      borderRadius: 25,
      backgroundColor: 'white',
      position: 'absolute',
      top: 50,
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    mapStyle: {
      flex: 1,
      backgroundColor: 'white',
    },
    locationInnerStyle: {
      justifyContent: 'center',
      alignIte: 'center',
      borderRadius: 25,
      width: 200,
      height: 60,
    },
    markerSvg: {
      position: 'absolute',
      left: (width - 40) / 2,
      top: (height - 40) / 2,
    },
    locationPress: {
      zIndex: 2000,
      position: 'absolute',
      bottom: 30,
      alignSelf: 'center',
      borderRadius: 32,
      backgroundColor: '#FE5959',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignIte: 'center',
    },
  });
};
