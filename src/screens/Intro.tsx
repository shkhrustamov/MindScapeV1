import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Intro = () => {
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={() => navigate('Main')}>Intro</Text>
    </View>
  );
};

export default Intro;
