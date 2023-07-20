import { View, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import { colors } from '../../DesignTokens/colors';
import CustomText from '../../Components/Text';
import { height, layout } from '../../DesignTokens/layout';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { INITIAL_REQUESTS, KEYS } from '../../Constants/Constants';
import HelperStyles from '../../DesignTokens/HelperStyles';
import * as Animatable from 'react-native-animatable';
let intervallApi;

const StatusOrders = props => {
  const { navigation } = props;
  const route = props.route;
  const isFocused = useIsFocused;
  const [requests, setRequests] = useState(INITIAL_REQUESTS);

  const renderStatus = code => {
    switch (code) {
      case 1:
        return 'DELIVERY';
      case 2:
        return 'DELIVERED';
      case 0:
        return 'PENDING';
      case 3:
        return 'INPROCESS';
    }
  };

  const renderStatusText = status => {
    switch (status) {
      case 'PENDING':
        return 'در حال پردازش';
      case 'DELIVERED':
        return 'تحویل شده';
      case 'DELIVERY':
        return 'در حال تحویل';
      case 'INPROCESS':
        return 'در انتظار پرداخت';
    }
  };

  const renderBgColor = status => {
    switch (status) {
      case 'PENDING':
        return { backgroundColor: colors.gray[400] };
      case 'DELIVERED':
        return { backgroundColor: colors.blue };
      case 'DELIVERY':
        return { backgroundColor: colors.gray[400] };
      case 'INPROCESS':
        return { backgroundColor: colors.gray[400] };
      default:
        return { backgroundColor: colors.gray[400] };
    }
  };

  const getRequests = () => {
    let newRequests = requests.map(value => {
      return {
        ...value,
        status: renderStatus(Math.floor(Math.random() * 1000) % 4),
      };
    });
    setRequests(newRequests);
  };

  useEffect(() => {
    if (isFocused) {
      intervallApi = setInterval(() => {
        getRequests();
      }, 30000);
    } else {
      clearInterval(intervallApi);
    }
  }, [isFocused]);

  const EmptyComponent = () => {
    return (
      <View style={s.emptyContainer}>
        <CustomText style={s.emptyRequest}>
          {'هیچ سفارشی وجود ندارد'}
        </CustomText>
      </View>
    );
  };

  const renderRequest = ({ item, index }) => {
    return (
      <Animatable.View
        animation={'bounceInRight'}
        easing={'linear'}
        duration={800 + index * 200}>
        <View style={s.requestWrapper}>
          <View style={s.topRequest}>
            <CustomText style={s.price} bold>
              {item.price} {'تومان'}
            </CustomText>
            <View style={s.topRight}>
              <CustomText>
                {'کد سفارش'} {item.code}
              </CustomText>
              <CustomText colorTone={400} style={s.date}>
                {item.date}
              </CustomText>
            </View>
          </View>
          <View style={s.bottomRow}>
            <View style={[s.statusContainer, renderBgColor(item.status)]}>
              <CustomText light>{renderStatusText(item.status)}</CustomText>
            </View>
            <Image
              source={require('../../Assets/Images/mobile-1.jpg')}
              style={s.productImage}
            />
          </View>
        </View>
      </Animatable.View>
    );
  };

  return (
    <View style={s.container}>
      <Header navigation={navigation} />
      <View style={s.listContainer}>
        <View style={s.listWrapper}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 70 }}
            renderItem={renderRequest}
            ListEmptyComponent={EmptyComponent}
            data={requests}
          />
        </View>
      </View>
    </View>
  );
};

export default StatusOrders;

const s = StyleSheet.create({
  topRight: {
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    marginTop: 5,
  },
  bottomRow: {
    ...HelperStyles.rowCrossMainSpaceBetween,
  },
  statusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: layout.generalRadius,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height - 110,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: layout.generalRadius,
    backgroundColor: 'red',
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
  emptyRequest: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listWrapper: {
    flex: 1,
  },
  requestWrapper: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.lightBlue,
    borderColor: colors.gray[400],
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: layout.generalRadius,
    marginBottom: 15,
  },
  price: {
    letterSpacing: 1,
  },
  topRequest: {
    ...HelperStyles.rowCrossMainSpaceBetween,
    alignItems: 'flex-start',
  },
});
