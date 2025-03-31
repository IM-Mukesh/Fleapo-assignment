import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import RightArrowIcon from '../assets/icons/RightArrowIcon';
import SearchIcon from '../assets/icons/SearchIcon';
import {theme} from '../utils/theme';
import MicIcon from '../assets/icons/MicIcon';
import FriendsHeartIcon from '../assets/icons/FriendsHeartIcon';

// Types
type User = {
  id: string;
  name: string;
  location: string;
  avatar: string;
  verified?: boolean;
  friend?: boolean;
};

type TabType = 'Friends' | 'Verified' | 'Everyone';

const allUsers: User[] = [
  {
    id: '1',
    name: 'CaptainCrunch',
    location: 'Los Angeles, CA',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    friend: true,
  },
  {
    id: '2',
    name: 'love.levi.exe',
    location: 'Los Angeles, CA',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    verified: true,
  },
  {
    id: '3',
    name: 'tenderlove',
    location: 'Los Angeles, CA',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    verified: true,
    friend: true,
  },
  {
    id: '4',
    name: 'GourmetGuru',
    location: 'Los Angeles, CA',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: '5',
    name: 'TechNinja',
    location: 'San Francisco, CA',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    friend: true,
  },
  {
    id: '7',
    name: 'MusicMaster',
    location: 'Austin, TX',
    avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    friend: true,
  },
];

const PeopleScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Friends');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    let result = allUsers;

    if (activeTab === 'Friends') {
      result = result.filter(user => user.friend === true);
    } else if (activeTab === 'Verified') {
      result = result.filter(user => user.verified === true);
    }
    if (searchQuery.trim()) {
      const lowercasedQuery = searchQuery.toLowerCase();
      result = result.filter(
        user =>
          user.name.toLowerCase().includes(lowercasedQuery) ||
          user.location.toLowerCase().includes(lowercasedQuery),
      );
    }

    setFilteredUsers(result);
  }, [searchQuery, activeTab]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const renderUser = ({item}: {item: User}) => (
    <TouchableOpacity style={styles.userItem}>
      <View>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        {item.friend && (
          <SvgXml
            xml={FriendsHeartIcon}
            fill={theme.colors.pink}
            style={styles.HeartIconStyle}
            stroke={theme.colors.black}
            strokeWidth={2}
          />
        )}
      </View>
      <View style={styles.userInfo}>
        <View>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userLocation}>{item.location}</Text>
        </View>
        {item.verified && <SvgXml xml={MicIcon} />}
      </View>
      <SvgXml xml={RightArrowIcon} />
    </TouchableOpacity>
  );

  const renderTabs = () => (
    <View style={styles.tabContainer}>
      {(['Friends', 'Verified', 'Everyone'] as TabType[]).map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}>
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No people found</Text>
      <Text style={styles.emptySubtext}>Try a different search term</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>People</Text>

        {renderTabs()}

        <FlatList
          data={filteredUsers}
          renderItem={renderUser}
          keyExtractor={item => item.id}
          contentContainerStyle={[
            styles.userList,
            filteredUsers.length === 0 && styles.emptyList,
          ]}
          ListEmptyComponent={renderEmptyState}
        />

        <View style={styles.searchContainer}>
          <SvgXml xml={SearchIcon} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search people"
            placeholderTextColor={theme.colors.mediumGrey}
            value={searchQuery}
            onChangeText={handleSearch}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearButton}>×</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.darkGray,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  HeartIconStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.white,
    marginTop: 10,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.lightGray,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: theme.colors.black,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 16,
  },
  activeTab: {
    backgroundColor: theme.colors.white,
  },
  tabText: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: theme.colors.black,
  },
  userList: {
    paddingBottom: 70,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emptySubtext: {
    color: theme.colors.grayVariant,
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.lightGray,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  userName: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  userLocation: {
    color: theme.colors.grayVariant,
    fontSize: 14,
    marginTop: 2,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.red,
    marginRight: 8,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.circle,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: theme.colors.white,
    fontSize: 16,
    padding: 0,
  },
  clearButton: {
    color: theme.colors.mediumGrey,
    fontSize: 24,
    paddingHorizontal: 8,
  },
});

export default PeopleScreen;
