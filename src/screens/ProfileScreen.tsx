import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {theme} from '../utils/theme';
import ProfileHeader from './ProfileHeader';
import TopRestaurants from './TopRestaurants';
import RecentActivity from './RecentActivity';
import ActivityGraph from './ActivityGraph';
import ListsSection from './ListsSection';
import NavigationListItem from './NavigationListItem';
const MapImage = require('../assets/images/MapWithLocation.png');

const ProfileScreen = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.MapContainer}>
        <Image source={MapImage} style={styles.mapImage} resizeMode="cover" />
      </View>

      <ProfileHeader username={'Kumar Gaurav'} location={'Los Angeles, CA'} />
      <TopRestaurants />
      <RecentActivity />
      <ActivityGraph />
      <ListsSection />
      <NavigationListItem />
      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.darkGray,
  },
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.darkGray,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  MapContainer: {
    height: 300,
    width: '100%',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  bottomPadding: {
    height: 80,
  },
});

export default ProfileScreen;
