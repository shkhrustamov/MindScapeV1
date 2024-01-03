import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Haptic from 'react-native-haptic-feedback';
import Inbox from '../screens/Inbox.tsx';
import {useNavigation} from '@react-navigation/native';

const TaskHeaderLayout = ({children}) => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => {
            Haptic.trigger('rigid');
          }}
          style={{alignItems: 'flex-start', paddingLeft: 20}}>
          <MaterialCommunityIcons name="menu" color="#1c2939" size={35} />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#1C2939',
          }}>
          Today
        </Text>
        <TouchableOpacity
          onPress={() => {
            Haptic.trigger('rigid');
          }}
          style={{alignItems: 'flex-end', paddingRight: 20}}>
          <MaterialCommunityIcons name="bell-ring" color="#1c2939" size={26} />
        </TouchableOpacity>
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
});
export default TaskHeaderLayout;
