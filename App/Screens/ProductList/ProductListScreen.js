import { View, FlatList, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import ProductItem from './Components/ProductItem';
import { MOBILE_DATA } from '../../../DATA';
import { colors } from '../../DesignTokens/colors';
import Header from './Components/Header';
import * as Animatable from 'react-native-animatable';

const ProductListScreen = props => {
  const { navigation } = props;
  const listRef = useRef(null);
  // const { } = props?.route?.params;

  const backPress = () => {
    // listRef.current.animate('fadeOutRight' , 600 )
  };

  return (
    <View style={s.container}>
      <Header backPress={backPress} navigation={navigation} />
      <Animatable.View ref={listRef}>
        <Animatable.View
          animation={'fadeInRight'}
          easing="ease-out"
          duration={400}>
          <FlatList
            data={MOBILE_DATA}
            renderItem={({ item, index }) => {
              return (
                <ProductItem
                  title={item.title}
                  price={item.price}
                  stars={item.stars}
                  image={item.image}
                  index={index}
                  code={item.code}
                  navigation={navigation}
                  listRef={listRef}
                />
              );
            }}
          />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default ProductListScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
