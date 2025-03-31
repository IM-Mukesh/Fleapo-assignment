import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen'; // Use for missing screens
import PeopleScreen from '../screens/PeopleScreen';
import {SvgXml} from 'react-native-svg';
import MapIcon from '../assets/icons/navigation/MapIcon';
import PeopleIcon from '../assets/icons/navigation/PeopleIcon';
import HitlistIcon from '../assets/icons/HitlistIcon';
import ListIcon from '../assets/icons/navigation/ListIcon';
import ProfileIcon from '../assets/icons/navigation/ProfileIcon';
import ListMiddle from '../assets/icons/navigation/ListMiddle';
import ListHeartIcon from '../assets/icons/navigation/ListHeartIcon';
// Import Icons
const icons: {
  [key in 'Map' | 'People' | 'Lists' | 'Hitlist' | 'Profile']: any;
} = {
  Map: require('../assets/icons/Map.png'),
  People: require('../assets/icons/People.png'),
  Lists: require('../assets/icons/Map.png'),
  Hitlist: require('../assets/icons/Hitlist.png'),
  Profile: require('../assets/icons/Profile.png'),
};

// Screens (Replace with actual screens when ready)
const DummyScreen = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#121212',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: 'white'}}>Coming Soon</Text>
  </View>
);

const Tab = createBottomTabNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused}) => <SvgXml xml={MapIcon} />,
//           tabBarStyle: {backgroundColor: '#000', borderTopColor: '#222'},
//           tabBarLabelStyle: {color: 'white', fontSize: 12},
//           headerShown: false,
//         })}>
//         <Tab.Screen name="Map" component={DummyScreen} />
//         <Tab.Screen name="People" component={PeopleScreen} />
//         <Tab.Screen name="Lists" component={DummyScreen} />
//         <Tab.Screen name="Hitlist" component={DummyScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

const updatedListIcon = (
  <TouchableOpacity>
    <SvgXml xml={ListIcon} />
    <SvgXml xml={ListMiddle} />
    <SvgXml xml={ListHeartIcon} />
  </TouchableOpacity>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            // Return the appropriate icon based on the route name
            if (route.name === 'Map') {
              return <SvgXml xml={MapIcon} width={28} height={28} />;
            } else if (route.name === 'People') {
              return <SvgXml xml={PeopleIcon} width={28} height={28} />;
            } else if (route.name === 'Lists') {
              return <SvgXml xml={ListIcon} width={28} height={28} />;
            } else if (route.name === 'Hitlist') {
              return <SvgXml xml={HitlistIcon} width={28} height={28} />;
            } else if (route.name === 'Profile') {
              return <SvgXml xml={ProfileIcon} width={28} height={28} />;
            }

            // Default fallback (should never happen)
            return <SvgXml xml={MapIcon} width={28} height={28} />;
          },
          tabBarStyle: {backgroundColor: '#000', borderTopColor: '#222'},
          tabBarLabelStyle: {color: 'white', fontSize: 12},
          headerShown: false,
        })}>
        <Tab.Screen name="Map" component={DummyScreen} />
        <Tab.Screen name="People" component={PeopleScreen} />
        <Tab.Screen name="Lists" component={DummyScreen} />
        <Tab.Screen name="Hitlist" component={DummyScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import {SvgXml} from 'react-native-svg';

// // Active SVG icons
// const mapActiveIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M46 10H18C16.9 10 16 10.9 16 12V52C16 53.1 16.9 54 18 54H46C47.1 54 48 53.1 48 52V12C48 10.9 47.1 10 46 10ZM18 52V12H32V52H18ZM46 52H34V12H46V52Z" fill="#FFFFFF"/>
// </svg>
// `;

// const peopleActiveIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="32" cy="32" r="24" fill="#FF6B6B" stroke="#FF6B6B" stroke-width="2"/>
//   <path d="M32 18C27.6 18 24 21.6 24 26C24 30.4 27.6 34 32 34C36.4 34 40 30.4 40 26C40 21.6 36.4 18 32 18ZM32 32C28.7 32 26 29.3 26 26C26 22.7 28.7 20 32 20C35.3 20 38 22.7 38 26C38 29.3 35.3 32 32 32Z" fill="white"/>
//   <path d="M32 36C26.7 36 22 40.7 22 46V48H42V46C42 40.7 37.3 36 32 36ZM40 46H24C24 41.8 27.8 38 32 38C36.2 38 40 41.8 40 46Z" fill="white"/>
// </svg>
// `;

// const listsActiveIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <rect x="16" y="16" width="32" height="32" rx="4" fill="#FFFFFF"/>
//   <path d="M22 26H42M22 32H42M22 38H36" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
//   <path d="M44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40Z" fill="#FF6B6B" stroke="#FF6B6B" stroke-width="1"/>
// </svg>
// `;

// const hitlistActiveIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M44 16H20C18.9 16 18 16.9 18 18V52C18 53.1 18.9 54 20 54H44C45.1 54 46 53.1 46 52V18C46 16.9 45.1 16 44 16ZM20 18H32V36L26 33L20 36V18Z" fill="#FFFFFF"/>
// </svg>
// `;

// const profileActiveIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="32" cy="32" r="24" fill="#FFFFFF"/>
//   <path d="M32 22C29.8 22 28 23.8 28 26C28 28.2 29.8 30 32 30C34.2 30 36 28.2 36 26C36 23.8 34.2 22 32 22Z" fill="#1A1A1A"/>
//   <path d="M32 32C28.7 32 26 34.7 26 38V42H38V38C38 34.7 35.3 32 32 32Z" fill="#1A1A1A"/>
//   <path d="M43 24C41.6 24 40.5 25.1 40.5 26.5C40.5 27.9 41.6 29 43 29C44.4 29 45.5 27.9 45.5 26.5C45.5 25.1 44.4 24 43 24Z" fill="#9B59B6"/>
//   <path d="M43 30C40.8 30 39 31.8 39 34V36H47V34C47 31.8 45.2 30 43 30Z" fill="#9B59B6"/>
// </svg>
// `;

// // Inactive SVG icons
// const mapIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M46 10H18C16.9 10 16 10.9 16 12V52C16 53.1 16.9 54 18 54H46C47.1 54 48 53.1 48 52V12C48 10.9 47.1 10 46 10ZM18 52V12H32V52H18ZM46 52H34V12H46V52Z" fill="#8E8E93"/>
// </svg>
// `;

// const peopleIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="32" cy="32" r="24" fill="#8E8E93" stroke="#8E8E93" stroke-width="2"/>
//   <path d="M32 18C27.6 18 24 21.6 24 26C24 30.4 27.6 34 32 34C36.4 34 40 30.4 40 26C40 21.6 36.4 18 32 18ZM32 32C28.7 32 26 29.3 26 26C26 22.7 28.7 20 32 20C35.3 20 38 22.7 38 26C38 29.3 35.3 32 32 32Z" fill="#1A1A1A"/>
//   <path d="M32 36C26.7 36 22 40.7 22 46V48H42V46C42 40.7 37.3 36 32 36ZM40 46H24C24 41.8 27.8 38 32 38C36.2 38 40 41.8 40 46Z" fill="#1A1A1A"/>
// </svg>
// `;

// const listsIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <rect x="16" y="16" width="32" height="32" rx="4" fill="#8E8E93"/>
//   <path d="M22 26H42M22 32H42M22 38H36" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
//   <path d="M44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40Z" fill="#8E8E93" stroke="#8E8E93" stroke-width="1"/>
// </svg>
// `;

// const hitlistIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M44 16H20C18.9 16 18 16.9 18 18V52C18 53.1 18.9 54 20 54H44C45.1 54 46 53.1 46 52V18C46 16.9 45.1 16 44 16ZM20 18H32V36L26 33L20 36V18Z" fill="#8E8E93"/>
// </svg>
// `;

// const profileIconXml = `
// <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="32" cy="32" r="24" fill="#8E8E93"/>
//   <path d="M32 22C29.8 22 28 23.8 28 26C28 28.2 29.8 30 32 30C34.2 30 36 28.2 36 26C36 23.8 34.2 22 32 22Z" fill="#1A1A1A"/>
//   <path d="M32 32C28.7 32 26 34.7 26 38V42H38V38C38 34.7 35.3 32 32 32Z" fill="#1A1A1A"/>
//   <path d="M43 24C41.6 24 40.5 25.1 40.5 26.5C40.5 27.9 41.6 29 43 29C44.4 29 45.5 27.9 45.5 26.5C45.5 25.1 44.4 24 43 24Z" fill="#9B59B6"/>
//   <path d="M43 30C40.8 30 39 31.8 39 34V36H47V34C47 31.8 45.2 30 43 30Z" fill="#9B59B6"/>
// </svg>
// `;

// // Interface for our nav item props
// interface NavItemProps {
//   activeIcon: string;
//   inactiveIcon: string;
//   label: string;
//   isActive: boolean;
//   onPress: () => void;
// }

// // Navigation item component
// const NavItem: React.FC<NavItemProps> = ({
//   activeIcon,
//   inactiveIcon,
//   label,
//   isActive,
//   onPress,
// }) => {
//   return (
//     <TouchableOpacity style={styles.navItem} onPress={onPress}>
//       <SvgXml
//         xml={isActive ? activeIcon : inactiveIcon}
//         width={28}
//         height={28}
//       />
//       <Text style={[styles.navLabel, isActive ? styles.activeLabel : null]}>
//         {label}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// // Navigation route interface
// interface RouteProps {
//   name: string;
//   component: React.ComponentType<any>;
// }

// // Props for the AppNavigation component
// interface AppNavigationProps {
//   routes: RouteProps[];
//   currentRoute: string;
//   onRouteChange: (routeName: string) => void;
// }

// // Main AppNavigation component
// const AppNavigation: React.FC<AppNavigationProps> = ({
//   routes,
//   currentRoute,
//   onRouteChange,
// }) => {
//   const handleTabPress = (routeName: string) => {
//     onRouteChange(routeName);
//   };

//   return (
//     <View style={styles.container}>
//       <NavItem
//         activeIcon={mapActiveIconXml}
//         inactiveIcon={mapIconXml}
//         label="MAP"
//         isActive={currentRoute === 'MAP'}
//         onPress={() => handleTabPress('MAP')}
//       />
//       <NavItem
//         activeIcon={peopleActiveIconXml}
//         inactiveIcon={peopleIconXml}
//         label="PEOPLE"
//         isActive={currentRoute === 'PEOPLE'}
//         onPress={() => handleTabPress('PEOPLE')}
//       />
//       <NavItem
//         activeIcon={listsActiveIconXml}
//         inactiveIcon={listsIconXml}
//         label="LISTS"
//         isActive={currentRoute === 'LISTS'}
//         onPress={() => handleTabPress('LISTS')}
//       />
//       <NavItem
//         activeIcon={hitlistActiveIconXml}
//         inactiveIcon={hitlistIconXml}
//         label="HITLIST"
//         isActive={currentRoute === 'HITLIST'}
//         onPress={() => handleTabPress('HITLIST')}
//       />
//       <NavItem
//         activeIcon={profileActiveIconXml}
//         inactiveIcon={profileIconXml}
//         label="PROFILE"
//         isActive={currentRoute === 'PROFILE'}
//         onPress={() => handleTabPress('PROFILE')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#1A1A1A',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderTopWidth: 0.5,
//     borderTopColor: '#333333',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     width: '100%',
//     height: 60,
//     zIndex: 1000,
//   },
//   navItem: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   navLabel: {
//     fontSize: 10,
//     marginTop: 4,
//     color: '#8E8E93',
//     fontWeight: '500',
//   },
//   activeLabel: {
//     color: '#FFFFFF',
//   },
// });

// export default AppNavigation;
