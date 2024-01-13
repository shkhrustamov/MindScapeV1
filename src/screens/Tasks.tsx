import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import TasksTopLayout from '../components/HabitHeader.tsx';
import TodoComponent from '../components/TodoComponent.tsx';
import TaskButton from '../components/addTaskButton.tsx';

const Tasks = () => {
  // const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 500);
  // };
  return (
    <TasksTopLayout>
      <ScrollView style={{flex: 1}}>
        <TodoComponent />
      </ScrollView>
      <TaskButton />
    </TasksTopLayout>
  );
};

export default Tasks;
