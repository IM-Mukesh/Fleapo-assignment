import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../utils/theme';
import {List} from '../utils/Types';
import {SvgXml} from 'react-native-svg';
import HeartIcon from '../assets/icons/HeartIcon';
import RightArrowIcon from '../assets/icons/RightArrowIcon';
import Button from '../components/Button';
const lists: List[] = [
  {
    id: '1',
    name: 'Best thai in LA',
    description: 'Exactly what it says dummy!',
    count: 3,
    likes: 0,
    nearby: '1 nearby!',
  },
  {
    id: '2',
    name: 'tendies',
    description: 'You already know i love me some basement chicken tendies',
    count: 5,
    likes: 12,
  },
  {
    id: '3',
    name: 'Favorite date spots',
    description: 'If we make it to one of these spots, we are vibin hard',
    count: 3,
    likes: 27,
  },
];

const ListsSection: React.FC = () => {
  const getEmoji = (id: string) => {
    switch (id) {
      case '1':
        return '🇹🇭';
      case '2':
        return '🐔';
      case '3':
        return '💖';
      default:
        return '📋';
    }
  };

  return (
    <>
      <View style={[styles.topLine, {marginVertical: 8}]}></View>
      <View style={styles.container}>
        <Text style={styles.title}>Lists</Text>

        {lists.map(list => (
          <>
            <TouchableOpacity key={list.id} style={styles.listItem}>
              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor: theme.colors.pink},
                ]}>
                <Text style={styles.iconText}>{getEmoji(list.id)}</Text>
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.name}>{list.name}</Text>
                <Text style={styles.description} numberOfLines={2}>
                  {list.description}
                </Text>
                <View style={styles.bottomViewContainer}>
                  <Text style={styles.stats}>{list.count} restaurants </Text>
                  {list?.nearby && (
                    <Text style={styles.nearby}>{list?.nearby} </Text>
                  )}
                  <Text style={styles.stats}>{' •'}</Text>
                  <SvgXml
                    xml={HeartIcon}
                    color={theme.colors.textSecondary}
                    style={{marginTop: 12, marginHorizontal: 4}}
                  />
                  <Text style={[styles.stats, {marginBottom: 4}]}>
                    {list.likes === 0 ? 'No likes yet' : list?.likes + ' likes'}
                  </Text>
                </View>
              </View>
              <SvgXml xml={RightArrowIcon} />
            </TouchableOpacity>
            <View style={styles.topLine}></View>
          </>
        ))}

        <Button
          title="See more"
          onPress={() => {}}
          style={styles.seeMoreButtonStyle}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topLine: {
    width: '100%',
    backgroundColor: theme.colors.line,
    height: 2,
  },
  bottomViewContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  },
  seeMoreButtonStyle: {
    borderWidth: 2,
    borderLeftWidth: theme.spacing.xs,
    borderBottomWidth: theme.spacing.xs,
    borderRadius: theme.borderRadius.circle,
    backgroundColor: '#FFFFFF10',
    marginTop: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    borderColor: theme.colors.black,
  },
  title: {
    fontSize: theme.typography.fontSize.large,
    fontWeight: 'bold',
    color: theme.colors.white,
    marginBottom: theme.spacing.md,
  },
  listItem: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.circle,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderBottomWidth: theme.spacing.xs,
    borderLeftWidth: theme.spacing.xs,
    borderColor: theme.colors.black,
  },
  iconText: {
    fontSize: theme.typography.fontSize.large,
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
  description: {
    fontSize: theme.typography.fontSize.small,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  stats: {
    fontSize: theme.typography.fontSize.small,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.md,
  },
  nearby: {
    fontSize: theme.typography.fontSize.small,
    color: theme.colors.lightGreen,
    marginTop: theme.spacing.md,
    fontWeight: theme.typography.fontWeight.bold,
  },
  chevron: {
    fontSize: 20,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.md,
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

export default ListsSection;
