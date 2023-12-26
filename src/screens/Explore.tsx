import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Today from '../components/Today.tsx';

const Explore = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#16171A'}}>
      <Today />
    </ScrollView>
  );
};

export default Explore;
