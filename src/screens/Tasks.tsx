import React, {useState} from 'react';
import Haptic from 'react-native-haptic-feedback';
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TaskHeader from '../components/TaskHeader.tsx';
import TaskHeaderLayout from '../components/TaskHeader.tsx';
import HorizontalScrollCalendar from '../components/Calendar.tsx';
import Example from '../components/Calendar.tsx';
import Calendar from '../components/Calendar.tsx';
import ButtonGroup from '../components/ButtonGroup.tsx';

const Tasks = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };
  return (
    <TaskHeaderLayout>
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#2F80ED']}
          />
        }>
        <Calendar />
        <ButtonGroup />
      </ScrollView>
    </TaskHeaderLayout>
  );
};

export default Tasks;
