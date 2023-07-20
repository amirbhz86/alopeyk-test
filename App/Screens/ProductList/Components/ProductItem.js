import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import HelperStyles from '../../../DesignTokens/HelperStyles';
import CustomText from '../../../Components/Text';
import { StarSVG } from '../../../Assets/Svg/Index';
import { layout } from '../../../DesignTokens/layout';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { colors } from '../../../DesignTokens/colors';
import * as Animatable from 'react-native-animatable';

const ProductItem = props => {
  const { image, title, stars, price, index, navigation, listRef } = props;
  const s = styles(index);

  const goToMap = () => {
    listRef.current.animate('fadeOutLeft', 600);
    setTimeout(() => {
      navigation.navigate('LOCATION_MAP_SCREEN');
    }, 600);
    setTimeout(() => {
      listRef.current.animate('fadeInLeft', 600);
    }, 1000);
  };

  return (
    <TouchableWithoutFeedback onPress={goToMap} style={s.container}>
      <View style={s.leftPart}>
        <CustomText>{title}</CustomText>
        <View style={s.detailContainer}>
          <View style={s.detailLeftView}>
            <View style={s.starsRow}>
              <Animatable.View
                animation={'rubberBand'}
                easing="ease-out"
                iterationCount={3}>
                <StarSVG width={14} height={14} />
              </Animatable.View>
              <CustomText style={s.starsText}>{stars}</CustomText>
            </View>
            <View style={s.priceRow}>
              <CustomText bold style={s.priceText}>
                {price} {'تومان'}
              </CustomText>
            </View>
          </View>
          <TouchableOpacity onPress={goToMap} style={s.buyTouchable}>
            <CustomText light bold>
              {'خرید'}
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={s.rightPart}>
        <Image style={s.productImage} source={image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductItem;

const styles = index =>
  StyleSheet.create({
    detailLeftView: {},
    detailContainer: {
      ...HelperStyles.rowCrossMainSpaceBetween,
      flexDirection: 'row-reverse',
    },
    buyTouchable: {
      paddingHorizontal: 10,
      alignSelf: 'flex-end',
      paddingVertical: 5,
      backgroundColor: colors.blue,
      borderRadius: layout.generalRadius,
    },
    priceRow: {
      // ...HelperStyles.rowCrossMainSpaceBetween,
      alignSelf: 'flex-start',
    },
    leftPart: {
      flex: 1.5,
      paddingRight: 16,
    },
    rightPart: {
      flex: 0.5,
    },
    starsText: {
      marginLeft: 8,
      fontSize: 12,
      top: 4,
    },
    starsRow: {
      ...HelperStyles.rowCross,
      alignSelf: 'flex-end',
    },
    priceText: {
      textAlign: 'left',
      alignSelf: 'flex-start',
      fontSize: 14,
      marginTop: 5,
    },
    container: {
      paddingVertical: 16,
      paddingHorizontal: 26,
      borderTopWidth: index == 0 ? 0 : 1,
      borderColor: layout.borderColor,
      // flexWrap: 'wrap',
      ...HelperStyles.rowCrossMainSpaceBetween,
    },
    productImage: {
      height: 70,
      width: 70,
      resizeMode: 'contain',
    },
  });
