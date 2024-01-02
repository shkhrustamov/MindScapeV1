import React from 'react';
import Haptic from 'react-native-haptic-feedback';
import {ScrollView, Text, TouchableOpacity} from 'react-native';

const Tasks = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity>
        <Text>hello</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Tasks;
