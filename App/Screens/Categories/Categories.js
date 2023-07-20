import { View, Text, StyleSheet, FlatList } from 'react-native';
import CateogryItem from './Components/CateogryItem';
import React, { useEffect, useRef, useState } from 'react';
import { DATA } from '../../../DATA';
import HelperStyles from '../../DesignTokens/HelperStyles';
import { colors } from '../../DesignTokens/colors';
import * as Animatable from 'react-native-animatable';

const Categories = props => {
  const { navigation } = props;
  const listRef = useRef(null);

  return (
    <View style={s.container}>
      <Animatable.View ref={listRef}>
        <View style={s.listContainer}>
          <FlatList
            data={DATA}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.key}
            renderItem={({ item, index }) => {
              return (
                <CateogryItem
                  navigation={navigation}
                  icon={item.icon}
                  title={item.title}
                  key={item.key}
                  index={index}
                  listRef={listRef}
                />
              );
            }}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default Categories;

const s = StyleSheet.create({
  categoriesContentStyle: {},
  listContainer: {
    height: 250,
  },
  container: {
    flex: 1,
    ...HelperStyles.center,
    backgroundColor: colors.white,
  },
});
