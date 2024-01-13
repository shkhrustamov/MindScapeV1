import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TasksTopLayout from '../components/HabitHeader.tsx';

const Journey = () => {
  return (
    <TasksTopLayout>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Journal</Text>
      </View>
    </TasksTopLayout>
  );
};

export default Journey;
