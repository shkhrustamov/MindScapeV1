import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import TaskHeaderLayout from '../components/HabitHeader.tsx';
import Calendar from '../components/Calendar.tsx';
import ButtonGroup from '../components/ButtonGroup.tsx';

const Habits = () => {
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

export default Habits;
