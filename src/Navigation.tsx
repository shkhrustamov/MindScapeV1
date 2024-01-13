import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tasks from './screens/Tasks.tsx';
import Discover from './screens/Discover.tsx';
import Haptic from 'react-native-haptic-feedback';
import COLORS from '../src/Constants';
import Journal from './screens/Journal.tsx';
import ToDo from './screens/Habit.tsx';
import Habit from './screens/Habit.tsx';

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
      onPress={() => {
        navigate(screenName);
        Haptic.trigger('impactHeavy');
      }}
      hitSlop={{top: 16, bottom: 16, left: 16, right: 16}}>
      <MaterialCommunityIcons name={name} color={color} size={32} />
    </TouchableOpacity>
  );
};

const Stack = createNativeStackNavigator();

const H = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={Tasks} />
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Challenges" component={Challenges} />
      <Stack.Screen name="Journey" component={Journey} />
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
          tabBarActiveTintColor: '#1C2939',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            borderColor: '#16171A',
          },
          headerStyle: {
            backgroundColor: '#fff',
          },
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 14},
          headerTintColor: '#1C2939',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Habit"
          component={Habit}
          options={{
            tabBarLabel: 'Habit',
            tabBarIcon: ({color}) => (
              <TabIcon screenName="Habit" name="puzzle-check" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarLabel: 'Tasks',
            headerTitle: 'MindScape',
            headerTitleStyle: {color: COLORS.DARK_BLUE},
            tabBarIcon: ({color}) => (
              <TabIcon screenName="Tasks" name="progress-check" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Journal"
          component={Journal}
          options={{
            tabBarLabel: 'Journal',
            tabBarIcon: ({color}) => (
              <TabIcon
                screenName="Journal"
                name="fountain-pen-tip"
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarLabel: 'Discover',
            tabBarIcon: ({color}) => (
              <TabIcon screenName="Discover" name="cards" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
