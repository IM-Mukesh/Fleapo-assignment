import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {theme} from '../utils/theme';

const ActivityGraph: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/GraphImage.png')}
        style={styles.imageStyle}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 108,
    borderRadius: theme.borderRadius.medium,
  },
  container: {margin: theme.spacing.lg},
});

export default ActivityGraph;
