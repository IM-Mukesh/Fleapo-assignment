import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../utils/theme';
import {Activity} from '../utils/Types';
import Button from '../components/Button';
import {SvgXml} from 'react-native-svg';
import TopEye from '../assets/icons/TopEye';
import BottomEye from '../assets/icons/BottomEye';
import RightArrowIcon from '../assets/icons/RightArrowIcon';

const imageMap: {[key: number]: any} = {
  1: require('../assets/images/activity/image1.png'),
  2: require('../assets/images/activity/image2.png'),
  3: require('../assets/images/activity/image3.png'),
};
const recentActivity: Activity[] = [
  {
    id: '1',
    name: 'Anajak Thai Cuisine',
    rating: 4.2,
    location: 'Sherman Oaks, CA',
    timeAgo: '1d',
  },
  {
    id: '2',
    name: 'Night + Market Weho',
    rating: 4.2,
    location: 'West Hollywood, CA',
    timeAgo: '4d',
  },
  {
    id: '3',
    name: 'Thai Boom',
    location: 'West Hollywood, CA',
    timeAgo: '1w',
  },
];

const RecentActivity: React.FC = () => {
  const getImageUrl = (index: number) => {
    return imageMap[index] || require('../assets/images/activity/image1.png');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>

      {recentActivity.map((place, index) => (
        <View key={place.id}>
          <View style={styles.activityItem}>
            <Image source={getImageUrl(index + 1)} style={styles.image} />

            <View style={styles.infoContainer}>
              <Text style={styles.name}>{place.name}</Text>
              <Text style={styles.locationText}>
                {place.location} • {place.timeAgo}
              </Text>
            </View>
            {place?.rating && (
              <View style={styles.redIconStyle}>
                <SvgXml xml={TopEye} />
                <Text style={styles.redIconTextStyle}>{place.rating}</Text>
                <SvgXml xml={BottomEye} />
              </View>
            )}
            <SvgXml xml={RightArrowIcon} style={{marginLeft: 4}} />
          </View>
          <View style={styles.line}></View>
        </View>
      ))}

      <Button title="See more" onPress={() => {}} style={styles.buttonStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
  },
  redIconStyle: {
    width: 40,
    height: 40,
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.red,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadius.circle,
    borderWidth: 3,
    borderColor: theme.colors.black,
  },
  buttonStyle: {
    borderWidth: 2,
    borderLeftWidth: theme.spacing.xs,
    borderBottomWidth: theme.spacing.xs,
    borderRadius: theme.borderRadius.circle,
    backgroundColor: '#FFFFFF10',
    marginTop: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    borderColor: theme.colors.black,
  },
  redIconTextStyle: {
    color: theme.colors.white,
    fontWeight: theme.typography.fontWeight.bold,
  },
  title: {
    fontSize: theme.typography.fontSize.large,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.white,
    marginBottom: theme.spacing.md,
  },
  line: {
    width: '100%',
    backgroundColor: theme.colors.line,
    height: 2,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing.md,
    height: 64,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.medium,
  },
  infoContainer: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  name: {
    fontSize: theme.typography.fontSize.medium,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.white,
    marginBottom: theme.spacing.xs,
  },
  locationText: {
    fontSize: theme.typography.fontSize.small,
    color: theme.colors.textSecondary,
  },
  ratingContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 14,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.small,
    fontWeight: theme.typography.fontWeight.bold,
  },
  seeMoreButton: {
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  seeMoreText: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.medium,
  },
});

export default RecentActivity;
