import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import TasksTopLayout from '../components/TaskHeader.tsx';
import TodoComponent from '../components/TodoComponent.tsx';
import TaskButton from '../components/TaskButton.tsx';

const Tasks = () => {
  return (
    <TasksTopLayout>
      <ScrollView style={{flex: 1}}>
        <TodoComponent />
      </ScrollView>
    </TasksTopLayout>
  );
};

export default Tasks;
