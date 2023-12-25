import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explore from './screens/Explore.tsx';
import Search from './screens/Search.tsx';
import {NavigationContainer} from '@react-navigation/native';
import Intro from './screens/Intro.tsx';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#16171A',
          borderTopWidth: 0,
          borderColor: '#16171A',
        },
        headerStyle: {
          backgroundColor: '#16171A',
        },
        headerTintColor: '#F2F2FA',
        tabBarActiveTintColor: '#6262D9',
        tabBarInactiveTintColor: 'grey',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Main" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
