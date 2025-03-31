// components/ProfileHeader.tsx
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from '../components/Button';
import {theme} from '../utils/theme';
import {SvgXml} from 'react-native-svg';
import MicIcon from '../assets/icons/MicIcon';
import HeartIcon from '../assets/icons/HeartIcon';
const userProfileIcon = require('../assets/icons/Profile.png');
interface ProfileHeaderProps {
  username: string;
  location: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({username, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameHandle}>{username}</Text>
          <SvgXml xml={MicIcon} />
        </View>
      </View>

      <View style={styles.mainSection}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.displayName}>{username}</Text>
          <Text style={styles.locationText}>{location}</Text>

          <View style={styles.followButtonContainer}>
            <Button
              title="Follow"
              onPress={() => {}}
              leftIcon={<SvgXml xml={HeartIcon} />}
              style={styles.buttonStyle}
            />
          </View>
        </View>

        <View style={styles.avatarContainer}>
          <Image
            source={userProfileIcon}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
  },
  buttonStyle: {
    borderWidth: 2,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRadius: theme.borderRadius.circle,
    backgroundColor: '#FFFFFF10',
    paddingHorizontal: theme.spacing.lg,
    borderColor: theme.colors.black,
  },
  topSection: {
    marginBottom: theme.spacing.xs,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameHandle: {
    color: theme.colors.gray,
    fontSize: theme.typography.fontSize.small,
    marginRight: theme.spacing.xs,
  },
  flagIcon: {
    width: 16,
    height: 16,
  },
  mainSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer: {
    flex: 1,
  },
  displayName: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.xs,
  },
  locationText: {
    color: theme.colors.gray,
    fontSize: theme.typography.fontSize.medium,
    marginBottom: theme.spacing.md,
  },
  followButtonContainer: {
    width: 100,
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: theme.borderRadius.circle,
    overflow: 'hidden',
    backgroundColor: theme.colors.black,
    borderWidth: 1,
    borderColor: theme.colors.text,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileHeader;
