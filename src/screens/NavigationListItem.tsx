import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {theme} from '../utils/theme';
import UserIcon from '../assets/icons/UserIcon';
import HitlistIcon from '../assets/icons/HitlistIcon';
import RightArrowIcon from '../assets/icons/RightArrowIcon';

const NavigationItem = ({
  icon,
  label,
  count,
  onPress,
}: {
  icon: string;
  label: string;
  count: number;
  onPress: () => void;
}) => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <TouchableOpacity
        style={styles.item}
        onPress={onPress}
        activeOpacity={0.7}>
        <View style={styles.leftSection}>
          <SvgXml
            xml={icon}
            width={24}
            height={24}
            color={theme.colors.white}
          />
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.count}>{count}</Text>
          <SvgXml
            xml={RightArrowIcon}
            width={24}
            height={24}
            color={theme.colors.white}
          />
        </View>
      </TouchableOpacity>
      <View style={[styles.lineStyle, {marginVertical: 16, height: 1}]}></View>
    </View>
  );
};

const NavigationListItem: React.FC = () => {
  return (
    <>
      <View style={[styles.lineStyle, styles.lineExtraStyle]}></View>
      <View style={styles.container}>
        <NavigationItem
          icon={UserIcon}
          label="Following"
          count={3}
          onPress={() => console.log('Following pressed')}
        />
        <NavigationItem
          icon={HitlistIcon}
          label="Hitlist"
          count={3}
          onPress={() => console.log('Hitlist pressed')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    width: '100%',
    backgroundColor: theme.colors.line,
    height: 2,
  },
  lineExtraStyle: {marginVertical: 20, height: 3},
  container: {
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.medium,
    fontWeight: theme.typography.fontWeight.normal,
    marginLeft: theme.spacing.md,
  },
  count: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.medium,
    marginRight: theme.spacing.sm,
  },
});

export default NavigationListItem;
