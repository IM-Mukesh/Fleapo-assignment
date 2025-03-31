import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {theme} from '../utils/theme';
import {Restaurant} from '../utils/Types';
import {SvgXml} from 'react-native-svg';
import TopEye from '../assets/icons/TopEye';
import BottomEye from '../assets/icons/BottomEye';
const imageMap: {[key: number]: any} = {
  1: require('../assets/images/dishes/image1.png'),
  2: require('../assets/images/dishes/image2.png'),
  3: require('../assets/images/dishes/image3.png'),
  4: require('../assets/images/dishes/image4.png'),
  5: require('../assets/images/dishes/image5.png'),
  6: require('../assets/images/dishes/image6.png'),
  7: require('../assets/images/dishes/image7.png'),
  8: require('../assets/images/dishes/image8.png'),
};
const topRestaurants: Restaurant[] = [
  {
    id: '1',
    name: "Cali's",
    imageUrl: 'https://via.placeholder.com/100',
    rating: 9.5,
  },
  {
    id: '2',
    name: 'Don Angie',
    imageUrl: 'https://via.placeholder.com/100',
    rating: 9.2,
  },
  {
    id: '3',
    name: 'Sushi by Bou',
    imageUrl: 'https://via.placeholder.com/100',
    rating: 9.1,
  },
  {
    id: '4',
    name: 'Honor Bar',
    imageUrl: 'https://via.placeholder.com/100',
    rating: 9.1,
  },
  {
    id: '5',
    name: 'Easy Street',
    imageUrl: 'https://via.placeholder.com/100',
    rating: 9.1,
  },
  {
    id: '6',
    name: 'Osteria Mozza',
    imageUrl: 'https://via.placeholder.com/100',
    rating: 8.8,
  },
  {
    id: '7',
    name: 'Chipejos',
    imageUrl: 'https://via.placeholder.com/100',
    rating: 8.8,
  },
  {
    id: '8',
    name: 'Choi Bros',
    imageUrl: 'https://via.placeholder.com/100',
    rating: 8.7,
  },
];

const {width} = Dimensions.get('window');
const itemWidth = (width - theme.spacing.lg * 2 - theme.spacing.md * 3) / 4;

const TopRestaurants: React.FC = () => {
  const getImageUrl = (index: number) => {
    return imageMap[index] || require('../assets/images/dishes/image1.png'); // Default image
  };

  const renderItem = ({item, index}: {item: Restaurant; index: number}) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={getImageUrl(index + 1)} style={styles.image} />
        <View style={styles.ratingBadge}>
          <SvgXml xml={TopEye} />
          <Text style={styles.ratingText}>{item.rating}</Text>
          <SvgXml xml={BottomEye} />
        </View>
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {index + 1 + item.name}
      </Text>
    </View>
  );

  return (
    <>
      <View style={styles.topLine}></View>
      <View style={styles.container}>
        <Text style={styles.title}>Gaurav's Top 8</Text>
        <FlatList
          data={topRestaurants}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={4}
          scrollEnabled={false}
          columnWrapperStyle={styles.row}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topLine: {width: '100%', backgroundColor: theme.colors.line, height: 2},
  container: {
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.fontSize.large,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.white,
    marginBottom: theme.spacing.md,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  itemContainer: {
    width: itemWidth,
    marginBottom: theme.spacing.md,
  },
  imageContainer: {
    position: 'relative',
    borderRadius: theme.borderRadius.medium,
    overflow: 'hidden',
    width: itemWidth,
    height: itemWidth,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  ratingBadge: {
    position: 'absolute',
    top: theme.spacing.xl,
    left: 22,
    backgroundColor: theme.colors.red,
    borderRadius: theme.borderRadius.circle,
    width: theme.typography.fontSize.xxl,
    height: theme.typography.fontSize.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.small,
    fontWeight: theme.typography.fontWeight.bold,
  },
  name: {
    fontSize: theme.typography.fontSize.small,
    color: theme.colors.white,
    marginTop: theme.spacing.xs,
    textAlign: 'center',
  },
});

export default TopRestaurants;
