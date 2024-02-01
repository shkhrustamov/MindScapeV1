import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import JournalHeaderLayout from '../components/JournalHeader.tsx';
import Journaling from '../components/Journaling.tsx';

const Journey = () => {
  return (
    <JournalHeaderLayout>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Journaling />
      </View>
    </JournalHeaderLayout>
  );
};

export default Journey;
