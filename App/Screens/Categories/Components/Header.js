import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import HelperStyles from '../../../DesignTokens/HelperStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LeftArrosSVG } from '../../../Assets/Svg/Index';
import CustomText from '../../../Components/Text';
import { colors } from '../../../DesignTokens/colors';

const Header = props => {
  const { navigation } = props;

  const backPress = () => {
    navigation?.goBack();
  };

  useEffect(() => {
    if (props?.route?.params) {
      Alert.alert('sdfsdjhfjksdhf');
    }
  }, [props?.route?.params]);

  return (
    <View style={s.container}>
      <View style={s.leftPart} />
      <View style={s.center}>
        <CustomText style={s.productsText} bold>
          {'دسته بندی ها'}
        </CustomText>
      </View>
      <View style={s.rightPart} />
    </View>
  );
};

export default Header;

const s = StyleSheet.create({
  productsText: {
    fontSize: 17,
  },
  backTouchable: {
    padding: 10,
    left: -10,
  },
  container: {
    width: '100%',
    height: 50,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.gray[200],
    elevation: 4,
    ...HelperStyles.rowCross,
  },
  center: {
    flex: 1,
    ...HelperStyles.center,
  },
  rightPart: {
    flex: 1,
    ...HelperStyles.center,
  },
  leftPart: {
    paddingLeft: 16,
    flex: 1,
  },
});
