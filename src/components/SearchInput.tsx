import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // You can perform any search-related logic here
    if (onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        style={{
          flex: 1,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingLeft: 10,
        }}
        placeholder="Search..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
    </View>
  );
};

export default SearchInput;
