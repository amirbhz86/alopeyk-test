import { Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
export const DATA = [
  {
    title: 'موبایل',
    key: '1',
    icon: <AntDesign name={'mobile1'} size={20} color={'black'} />,
  },
  {
    title: 'کالای دیجیتال',
    key: '2',
    icon: <Entypo name={'tv'} size={20} color={'black'} />,
  },
  {
    title: 'خانه و آشپزخانه',
    key: '3',
    icon: (
      <Image
        style={{ width: 30, height: 30, resizeMode: 'contain' }}
        source={require('./App/Assets/Icons/sofa.png')}
      />
    ),
  },
  {
    title: 'مد و پوشاک',
    key: '4',
    icon: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('./App/Assets/Icons/tshirt.png')}
      />
    ),
  },
];

export const MOBILE_DATA = [
  {
    image: require('./App/Assets/Images/mobile-1.jpg'),
    title: 'گوشی موبایل سامسونگ مدل Galaxy S20 FE',
    stars: '۴.۲',
    price: '۱۴,۹۰۰,۰۰۰',
    code: '۳۴۷۷۶۳۵۶۷۶۴۸',
  },
  {
    image: require('./App/Assets/Images/mobile-2.jpg'),
    title: 'گوشی موبایل اپل مدل CH iphone 13',
    stars: '۴.۷',
    price: '۱۲,۰۰۰,۰۰۰',
    code: '۶۷۳۲۶۴۷۶۴۸۳',
  },
  {
    image: require('./App/Assets/Images/mobile-3.jpg'),
    title: 'گوشی موبایل سامسونگ مدل A14 Galaxy',
    stars: '۳.۵',
    price: '۸,۵۰۰,۰۰۰',
    code: '۶۷۶۷۸۷۶۷۶۶',
  },
  {
    image: require('./App/Assets/Images/mobile-4.jpg'),
    title: 'گوشی موبایل شیایومی مدل Redmi Note 12',
    stars: '۳.۴',
    price: '۲۳,۰۰۰,۰۰۰',
    code: '۳۴۵۷۹۲۸۴۷۳',
  },
  {
    image: require('./App/Assets/Images/mobile-1.jpg'),
    title: 'گوشی موبایل سامسونگ مدل Galaxy S20 FE',
    stars: '۴.۲',
    price: '۱۴,۹۰۰,۰۰۰',
  },
  {
    image: require('./App/Assets/Images/mobile-2.jpg'),
    title: 'گوشی موبایل اپل مدل CH iphone 13',
    stars: '۴.۷',
    price: '۱۲,۰۰۰,۰۰۰',
    code: '۸۷۹۸۷۷۳۹۴۳۸',
  },
  {
    image: require('./App/Assets/Images/mobile-3.jpg'),
    title: 'گوشی موبایل سامسونگ مدل A14 Galaxy',
    stars: '۳.۵',
    price: '۸,۵۰۰,۰۰۰',
    code: '۷۲۹۷۲۴۹۸۳۷',
  },
];
