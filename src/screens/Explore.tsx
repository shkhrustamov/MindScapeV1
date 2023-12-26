import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Today from '../components/Today.tsx';
import PictureDay from '../components/PictureDay.tsx';
import TopRead from '../components/TopRead.tsx';
import SearchInput from '../components/SearchInput.tsx';

const Explore = () => {
  const handleSearch = searchText => {
    console.log('Search:', searchText);
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#16171A'}}>
      <SearchInput onSearch={handleSearch} />
      <Today />
      <PictureDay />
      <TopRead />
    </ScrollView>
  );
};

export default Explore;
