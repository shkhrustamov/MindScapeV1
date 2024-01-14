import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Haptic from 'react-native-haptic-feedback';
import {useNavigation} from '@react-navigation/native';

const TaskButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: '#1C2939',
          borderRadius: 30,
          padding: 10,
        }}
        onPress={() => {
          navigation.navigate('MyModal');
          Haptic.trigger('rigid');
        }}>
        <MaterialCommunityIcons name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};
export default TaskButton;
