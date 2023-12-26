import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explore from './screens/Explore.tsx';
import Search from './screens/Search.tsx';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  screenName,
  name,
  color,
}: {
  name: string;
  color: string;
  screenName: string;
}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(screenName)}
      hitSlop={{top: 16, bottom: 16, left: 16, right: 16}}>
      <MaterialCommunityIcons name={name} color={color} size={32} />
    </TouchableOpacity>
  );
};

const Stack = createNativeStackNavigator();

const H = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenListeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        screenOptions={{
          tabBarActiveTintColor: '#6262D9',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: '#16171A',
            borderTopWidth: 0,
            borderColor: '#16171A',
          },
          headerStyle: {
            backgroundColor: '#16171A',
          },
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 14},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color}) => (
              <TabIcon screenName="Explore" name="compass" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
              <TabIcon screenName="Search" name="magnify" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
