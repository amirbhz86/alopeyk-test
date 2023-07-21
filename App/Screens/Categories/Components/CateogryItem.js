import { StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HelperStyles from '../../../DesignTokens/HelperStyles';
import * as Animatable from 'react-native-animatable';
import CustomText from '../../../Components/Text';
import { layout } from '../../../DesignTokens/layout';
import { colors } from '../../../DesignTokens/colors';

const CateogryItem = props => {
  const { title, icon, navigation, index, listRef } = props;
  const s = styles();

  const goToList = () => {
    listRef.current.animate('fadeOutLeft', 600);
    setTimeout(() => {
      navigation.navigate('PRODUCT_LIST_SCREEN');
      listRef.current.animate('fadeInLeft', 600);
    }, 600);
  };

  return (
    <Animatable.View
      animation={'bounceInLeft'}
      easing={'linear'}
      duration={800 + index * 200}>
      <TouchableOpacity onPress={goToList} style={s.container}>
        <CustomText style={s.title}>{title}</CustomText>
        {icon}
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default CateogryItem;

const styles = navigating =>
  StyleSheet.create({
    title: {
      marginRight: 10,
    },
    container: {
      width: '90%',
      height: 50,
      borderRadius: layout.generalRadius,
      marginBottom: 10,
      alignSelf: 'center',
      borderWidth: 1,
      backgroundColor: colors.lightBlue,
      borderColor: colors.gray[400],
      // elevation: navigating ? 0 : 5,
      ...HelperStyles.rowCross,
      justifyContent: 'center',
    },
  });
