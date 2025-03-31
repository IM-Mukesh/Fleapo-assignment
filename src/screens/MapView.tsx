// components/MapView.tsx
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {theme} from '../utils/theme';

interface RatingPinProps {
  rating: number;
  top: number;
  left: number;
}
const MapImage = require('../assets/images/MapWithLocation.png');

const MapView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={MapImage} // Placeholder for map
        style={styles.mapImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: '100%',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cityText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -10}],
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: theme.typography.fontWeight.bold,
  },
  ratingPin: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: theme.borderRadius.circle,
    // backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'white',
  },
  ratingText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.small,
    fontWeight: theme.typography.fontWeight.bold,
  },
  polygonImage: {
    width: '100%',
    height: '100%',
  },
  ratingPinText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default MapView;
